const express = require('express');
const tfServer = require('./tfServer'); // TensorFlow 서버 모듈
const tfFunction = require('./tfFunction');
const database = require('./database');
const user = require('./user');
const jwt = require('jsonwebtoken'); // jwt 모듈 추가
const path = require('path');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = process.env.PORT;

// 정적 파일 서비스 설정
app.use(express.static(path.join(__dirname, './public')));
// TensorFlow 서버 라우터 등록
app.use('/tf', tfServer);
// 이미지 저장경로 설정
app.use('/uploads', express.static('uploads'));
// CORS 미들웨어 추가
app.use(cors());
// body-parser 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 회원가입 처리
app.post('/signup', async (req, res) => {
    const { nickname, email, password, birth, gender } = req.body;
    console.log(nickname, email, password, birth, gender);
    try {
        await user.signUp(nickname, email, password, birth, gender);
        res.json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
});

// 로그인 처리
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('로그인 이메일 : ', email);
    console.log('로그인 패스워드 : ', password);

    try {
        const userInfo = await user.login(email, password);

        // JWT 생성
        const token = jwt.sign({ userEmail: userInfo.email, userName: userInfo.name }, process.env.JWT_SECRET, {
            expiresIn: '2h',
        });

        // 클라이언트에게 JWT 및 리다이렉트 URL 전달
        res.json({
            message: 'Login successful!',
            data: {
                userEmail: email,
                userName: userInfo.name,
                token: token,
            },
        });
        console.log('유저 정보 : ', userInfo);
        console.log('유저 토큰 : ', token);
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(401).json({ error: 'Login failed' });
    }
});

// 카카오 로그인
app.get('/login/kakao', async (req, res) => {
    const clientID = process.env.KAKAO_ID;
    const redirectURI = process.env.KAKAO_URL;

    try {
        // Kakao API에 대한 요청
        const response = await axios.get(
            `https://kauth.kakao.com/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=code`
        );
        console.log(response.data);
        // Kakao API의 응답을 클라이언트에 전달
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error', error);
    }
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
        res.redirect('http://localhost:3001');
    } catch (error) {
        console.error('카카오 API 오류:', error);
        res.status(500).json({ error: '카카오 API 오류' });
    }
});

// 마이페이지
app.get(`/mypage/:userEmail`, async (req, res) => {
    try {
        const userEmail = req.params.userEmail;
        console.log('유저 이메일 : ', userEmail);
        const userRecords = await user.myPage(userEmail);
        console.log('유저 정보 : ', userRecords);

        // 마이페이지 정보를 클라이언트에게 전달
        res.json({ success: true, data: userRecords });
    } catch (error) {
        console.error('Error in /mypage API:', error.message);
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
