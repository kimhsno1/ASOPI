const express = require('express');
const multer = require('multer');
const database = require('./database');
const path = require('path');
const fs = require('fs').promises;
const tf = require('@tensorflow/tfjs-node');
const { submitToModel, preprocessImage, loadModel } = require('./tfFunction'); // TensorFlow 관련 함수

let model;

const tfServer = express.Router();

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
    //await loadModel();
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        // 유저 이메일 추출
        const userEmail = req.body.email;
        //이미지 정보 로깅
        console.log('image received: ', req.file);
        // 모델 로드
        await loadModel();

        const imageBuffer = req.file.buffer;

        // 이미지를 전처리 함수에 대입.
        const inputTensor = await preprocessImage(imageBuffer);

        // 모델에 이미지 제출 및 결과 출력
        const modelResult = await submitToModel(inputTensor);

        // 모델 연결 해제
        if (model) {
            model.dispose();
        }
        // 결과 페이지로 이동
        res.redirect(`/result.html?result=${modelResult}`);
        // 출력된 결과를 함수에 넣어 병명 찾아오기
        try {
            const disease = await database.getDisease(modelResult);
            const symptom = await database.getSymptom(modelResult);
            await database.saveModelResult(modelResult, userEmail);
            res.json({ disease, symptom });
        } catch (error) {
            console.error('can not load diesease and symptom:', error);
            res.status(500).json({ error: 'Failed to load diesease and symptom' });
        }
        return;
        // 이미지 처리중 에러 발생한 경우
    } catch (error) {
        console.error('Error during image processing:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
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
