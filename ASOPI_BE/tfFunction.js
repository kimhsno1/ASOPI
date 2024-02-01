const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
// 모델 파일의 경로 및 모델 변수 초기화
const modelPath = 'models/ResNet50V2_epoch10(final)'; // 모델 파일 경로
let model;

// class_dictionary 전역으로 선언
const class_dictionary = {
    A01: '멜라닌 세포모반',
    A02: '이소성몽고반점',
    A03: '베커모반',
    A04: '밀크커피모반',
    A05: '연어반',
    A06: '표피모반',
    A07: '피지선모반',
    A08: '화염상모반',
    A09: '영아혈관종',
    B01: '건선',
    B02: '두드러기',
    B03: '여드름(태열)',
    B04: '아토피 피부염',
    B05: '만성 단순태선 및 양진',
    B06: '동전습진',
    C01: '단순 헤르페스',
    C02: '수두',
    C03: '물사마귀',
    C04: '농가진',
    C05: '어루러기',
    C06: '백선',
    C07: '수족구',
    D01: '백반증',
    D02: '소아황색 육아종',
    D03: '흑색선조',
    D04: '켈로이드',
    D05: '비만세포종',
    D06: '선상태선',
    D07: '영아 지루 피부염',
    D08: '땀띠',
};

// 모델 불러오기
async function loadModel() {
    try {
        if (!model) {
            // 모델이 이미 로드되어 있지 않은 경우에만 로드
            model = await tf.node.loadSavedModel(modelPath);

            // 모델의 레이어 정보 출력
            // printLayers(model);

            console.log('모델이 성공적으로 로드되었습니다.', model);
        } else {
            console.log('모델이 이미 로드되어 있습니다.');
        }

        // 모델 반환
        return model;
    } catch (error) {
        console.error('모델 로드 중 에러:', error);
        throw error;
    }
}

// 이미지 전처리
async function preprocessImage(imageBuffer) {
    // 이미지를 uint8 텐서로 디코딩
    const imageTensor = tf.node.decodeImage(imageBuffer, 3);

    // 이미지 텐서의 데이터 타입을 float32로 변경
    const floatImageTensor = imageTensor.toFloat();

    // 이미지 크기를 [224, 224]로 조정
    const resizedImageTensor = tf.image.resizeBilinear(floatImageTensor, [224, 224]);

    // 이미지를 [0, 1] 범위로 정규화
    const normalizedImageTensor = tf.div(resizedImageTensor, tf.scalar(255));
    console.log('이미지 크기:', normalizedImageTensor.shape);

    // 이미지를 [224, 224, 3] 형태로 reshape
    const reshapedImageTensor = normalizedImageTensor.reshape([1, 224, 224, 3]);
    console.log('전처리된 이미지 형태:', reshapedImageTensor.shape);

    return reshapedImageTensor;
}

// 모델에 이미지 제출
async function submitToModel(modelResult) {
    try {
        if (!model) {
            console.error('모델이 로드 되지 않았습니다.');
            return 'Error submitting to model';
        }
        // 모델 예측 수행
        const predictions = Array.from(model.predict(modelResult).dataSync());
        console.log('모델 예측 결과 : ', predictions);

        // 가장 큰 값을 갖는 인덱스 찾기
        const predictedIndex = predictions.indexOf(Math.max(...predictions));
        console.log('가장 큰 값을 갖는 인덱스 : ', predictedIndex);

        // 해당 클래스 찾기
        const predictedClass = Object.keys(class_dictionary)[predictedIndex];
        console.log('해당 클래스 : ', predictedClass);

        // 예측 결과 반환
        const result = class_dictionary[predictedClass];
        console.log('예측 결과 : ', result);

        return result;
    } catch (error) {
        // 예외 발생 시 에러 메시지 출력
        console.error('Error submitting to model:', error);
        return 'Error submitting to model';
    }
}

module.exports = { submitToModel, loadModel, preprocessImage };
