# 🔍 소아 피부 질환 AI 진단 분석 서비스 ASOPI

<br>

## 1. 프로젝트 소개

✅ 아소피는 30가지의 소아 대표 피부질환 데이터를 보유한 소아 피부 질환 AI 분석 서비스입니다. 

✅ 환부를 촬영 혹은 사진을 업로드하면 자체 개발한 AI가 피부 질환명을 알려줍니다. 

✅ 병원진료가 필요할 경우 지도를 통해 가까운 병원도 확인할 수 있습니다. 

✅ 진단 시, 입력한 자녀 정보를 통해서 자녀 별로 진단기록을 확인할 수 있습니다.

<br>

## 2. 팀원 구성

⚙️ 백엔드: 김형석, 이정호

🖥 프론트엔드: 최윤정, 염현선

📈 데이터: 염현선, 이정호



| 염현선| 최윤정 | 김형석|이정호|
| --- | --- | --- |---|
| ![KakaoTalk_Photo_2024-01-31-12-43-52](https://github.com/kimhsno1/ASOPI/assets/67044951/d6922dbd-1cd2-4ea0-b9f1-a8999f566049)| ![KakaoTalk_Photo_2024-01-31-13-45-31](https://github.com/kimhsno1/ASOPI/assets/67044951/7f586168-a53d-45c6-9e2c-6ffebc55d436)| ![KakaoTalk_Photo_2024-01-31-14-01-45](https://github.com/kimhsno1/ASOPI/assets/67044951/21076f04-8e86-4335-bfcf-419dfb3b629b)| ![KakaoTalk_Photo_2024-01-31-14-01-49](https://github.com/kimhsno1/ASOPI/assets/67044951/d23e5b8e-7352-4682-b4bc-da1c370b3823)|

<br>

## 3. 역할 분담


####  🐯 염현선(팀장)

- ##### 데이터
  - 소아 피부 질환 이미지 데이터 수집 및 전처리(피부 질환 30개 각 100장 총 3000장) 

  - CNN 코딩 및 모델 개발(CNN 모델 중 RESNET50V2 선정)

- ##### 프론트
  - 페이지: 로그인, 마이페이지, 지도, 컨텐츠, 회원가입

  - 기능: 로그인기능, 지도검색 및 결과 리스트, 회원가입 폼, 마이페이지 디비 연결, 토큰(JWT access token) 설정
- ##### 기획
  - 주제 선정 및 서비스 컨셉 설정
  - 서비스 기능별 네이밍 및 서비스 톤앤매너 설정

#### 🐰 최윤정

- ##### 프론트
  - 페이지: 메인, 진단페이지, 결과 페이지, 회원가입 
  - 기능: 사진촬영 및 사진 업로드 기능, 토큰(JWT access token) 설정, 로컬스토리지에 정보 저장 및 불러오기, 회원가입 비밀번호 일치여부 
- ##### 디자인
  - 아소피 서비스 로고, 전체 페이지 디자인 설정

- ##### 기획
  - 주제 선정 및 서비스 컨셉 설정
  - 서비스 기능별 네이밍 및 서비스 톤앤매너 설정


#### 🐭 이정호

- ##### 데이터
  - 이미지 데이터 크롤링 수집 
  - 모델 아키텍쳐 수정 및 DB구성

- ##### 백엔드
  - 백엔드 모델 연결 및 적용
  - 백엔드 기타 버그 수정

#### 🐸 김형석

- 백엔드 
  - 전체 페이지

서버 연결

<br>

## 4. 개발환경

- 프론트 <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> 

- 백엔드 <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white"> <img src="https://img.shields.io/badge/docker -2496ED?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/amazonec2 -FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"> 
- 데이터 <img src="https://img.shields.io/badge/python -3776AB?style=for-the-badge&logo=python&logoColor=white"> <img src="https://img.shields.io/badge/tensorflow -FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"> 
- 협업툴 <img src="https://img.shields.io/badge/github  -181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion -000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/googledrive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white">  <img src="https://img.shields.io/badge/googlesheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white"> 
- 디자인 <img src="https://img.shields.io/badge/figma -F24E1E?style=for-the-badge&logo=figma&logoColor=white">
  <br>
  
## 5. 프로젝트 구조
``` bash
C:.
├─.ipynb_checkpoints
├─.vscode
├─ASOPI
│  ├─BE
│  │  ├─ASOPI
│  │  ├─models
│  │  │  └─ResNet50V2_epoch10
│  │  │      ├─assets
│  │  │      └─variables
│  │  ├─node_modules
│  │  │  ├─.bin
│  │  │  ├─@mapbox
│  │  │  │  └─node-pre-gyp
│  │  │  │      ├─bin
│  │  │  │      ├─lib
│  │  │  │      │  └─util
│  │  │  │      │      └─nw-pre-gyp
│  │  │  │      └─node_modules
│  │  │  │          ├─.bin
│  │  │  │       ...
│  │  │  ├─@tensorflow
│  │  │  │  ├─tfjs
│  │  │  │  │  ├─.rollup.cache
│  │  │  │  │  │  └─tmp
│  │  │  │  │  │      └─tfjs-publish
│  │  │  │  │  │          └─tfjs
│  │  │  │  │  │              └─dist
│  │  │  │  │  ├─dist
│  │  │  │  │  │  ├─miniprogram
│  │  │  │  │  │  └─tools
│  │  │  │  │  │      └─custom_module
│  │  │  │  │  ├─src
│  │  │  │  │  └─tools
│  │  │  │  │      └─custom_module
│  │  │  │  ├─tfjs-backend-cpu
│  │  │  │  │  └─dist
│  │  │  │  │      ├─kernels
│  │  │  │  │      └─utils
│  │  │  │  ├─tfjs-backend-webgl
│  │  │  │  │  └─dist
│  │  │  │  │  ...
│  │  ├─public
│  │  │  └─src
│  │  └─views
│  ..
├─Data
├─models
│  ├─ResNet152V2_epoch10
│  │  ├─assets
│  │  └─variables
│  └─ResNet50V2_epoch10(Final)
│      ├─assets
│      └─variables
└─YH_skin_d
    ├─Include
    ├─Lib
    │  └─site-packages
    │      ├─adodbapi
    │      │  ├─examples
    │      │  │  └─__pycache__
    │      │  ├─test
    │      │  │  └─__pycache__
    │      │  └─__pycache__
    │      ├─asttokens
    │      │  └─__pycache__
    │     ...
    │ 
    ├─Scripts
    │  └─__pycache__
    └─share
        ├─jupyter
        │  └─kernels
        │      └─python3
        └─man
            └─man1
``` 
