const express = require('express');
const multer = require('multer');
const database = require('./database');
const path = require('path');
const fs = require('fs').promises;
const tf = require('@tensorflow/tfjs-node');
const cors = require('cors');
const bodyParser = require('body-parser');
const { submitToModel, preprocessImage, loadModel } = require('./tfFunction'); // TensorFlow 관련 함수
let model;
let modelResult;

const tfServer = express.Router();

tfServer.use(cors());
tfServer.use(bodyParser.urlencoded({ extended: true }));
tfServer.use(bodyParser.json());

// multer를 사용해 이미지 업로드 처리
const storage = multer.memoryStorage(); // Buffer에 직접 파일을 저장
// const upload = multer({ storage: storage });

const upload = multer({
    storage: storage,
    // limits: {
    //     fileSize: 10 * 1024 * 1024, // 10MB 제한
    // },
    fileFilter: (req, file, cb) => {
        // 파일 형식 제한
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only images are allowed.'));
        }
    },
});

// 이미지 업로드 및 모델에 제출 처리
tfServer.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        //이미지 정보 로깅
        console.log('image received: ', req.file);
        // 모델 로드
        await loadModel();

        const imageBuffer = req.file.buffer;

        // 이미지를 전처리 함수에 대입.
        const inputTensor = await preprocessImage(imageBuffer);

        // 모델에 이미지 제출 및 결과 출력
        modelResult = await submitToModel(inputTensor);

        // 모델 연결 해제
        if (model) {
            model.dispose();
        }
    } catch (error) {
        console.error('모델이 정상적으로 작동하지 않았습니당.');
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 출력된 결과를 함수에 넣어 병명 찾아오기
tfServer.get('/saveResult', async (req, res) => {
    try {
        const userEmail = req.headers.userEmail;
        console.log('유저 이메일 : ', userEmail);
        // 병명 찾기
        const disease = await database.getDisease(modelResult);
        // 증상 찾기
        const symptom = await database.getSymptom(modelResult);
        // 설명 찾기
        const description = await database.getDescription(modelResult);
        // 병명, 증상, 설명, 이메일을 유저 진단내역에 저장
        await database.saveModelResult(disease, symptom, description, userEmail);
        // json 형식으로 클라이언트에게 전달
        return res.json({ disease, symptom, description });
    } catch (error) {
        console.error('can not load diesease and symptom:', error);
        res.status(500).json({ error: 'Failed to load diesease and symptom' });
    }
});

tfServer.post('/saveRecord', async (req, res) => {
    const childAge = req.body.childAge;
    const childName = req.body.childName;

    await database.saveChildInfo(childName, childAge);
});

// 이미지 삭제 처리
tfServer.delete('/delete/:filename', async (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);

    try {
        await fs.unlink(filePath);
        res.json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).json({ error: 'Error deleting image' });
    }
});

module.exports = tfServer;
