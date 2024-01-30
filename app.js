const express = require('express');
const tfServer = require('./tfServer'); // TensorFlow 서버 모듈
const tfFunction = require('./tfFunction');
const database = require('./database');
const user = require('./user');
const jwt = require('jsonwebtoken'); // jwt 모듈 추가
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT;

// 정적 파일 서비스 설정
app.use(express.static(path.join(__dirname, '../ASOPI_FE/public')));
// TensorFlow 서버 라우터 등록
app.use('/tf', tfServer);
// 이미지 저장경로 설정
app.use('/uploads', express.static('uploads'));
// body-parser 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    const userEmail = req.query.email; // URL 파라미터에서 이메일 추출
    req.userEmail = userEmail; // 추출한 값을 request 객체에 저장
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 회원가입 처리
app.post('/signup', async (req, res) => {
    const { nickname, password, email, birth, gender } = req.body;

    try {
        await user.signUp(nickname, password, email, birth, gender);
        res.json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
});

// 로그인 처리
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userInfo = await user.login(email, password);
        const redirectTo = '/';

        // JWT 생성
        const token = jwt.sign({ userEmail: userInfo.email, userName: userInfo.name }, process.env.JWT_SECRET, {
            expiresIn: '2h',
        });

        // 클라이언트에게 JWT 및 리다이렉트 URL 전달
        const redirectURL = `${redirectTo}?email=${encodeURIComponent(userInfo.email)}`;
        res.json({ message: 'Login successful!', user: userInfo, token: token, redirectTo: redirectURL });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(401).json({ error: 'Login failed' });
    }
});

app.get('/login/kakao', async (req, res) => {
    const clientID = process.env.KAKAO_ID;
    const redirectURI = process.env.KAKAO_URL;

    res.redirect(
        `https://kauth.kakao.com/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=code`
    );
});

app.get('/oauth', async (req, res) => {
    const { code } = req.query;

    try {
        // 카카오 토큰 받아오기
        const accessToken = await user.getKakaoToken(code);
        console.log('카카오 토큰 : ', accessToken);

        // 카카오 사용자 정보 가져오기
        const userInfo = await user.getKakaoUserInfo(accessToken);
        console.log('카카오 사용자 정보 : ', userInfo);
        res.json(userInfo);
    } catch (error) {
        console.error('카카오 API 오류:', error);
        res.status(500).json({ error: '카카오 API 오류' });
    }
});

// 마이페이지
app.get('/mypage/:email', user.verifyToken, async (req, res) => {
    try {
        const email = req.params.email;
        const userRecords = await user.myPage(email);

        // 마이페이지 정보를 클라이언트에게 전달
        res.json({ success: true, data: userRecords });
    } catch (error) {
        console.error('Error in /mypage/:email API:', error.message);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// 업로드 폼 보여주기
app.get('/diagnosis', user.verifyToken, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'diagnosis.html'));
});

// 서버 시작 시 Oracle DB 연결
app.listen(port, async () => {
    await database.connectToDB();
    await tfFunction.loadModel();
    console.log(`${port}번 포트에서 열렸습니다.`);
});
