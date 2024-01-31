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
  - 백엔드 모델 연결
  - 회원 가입, 로그인, 웹서버 연결 코딩
  - 디비 생성 및 연결

<br>

## 4. 개발환경

- 프론트 <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> 

- 백엔드 <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white"> <img src="https://img.shields.io/badge/docker -2496ED?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/amazonec2 -FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"> <img src="https://img.shields.io/badge/oracle -F80000?style=for-the-badge&logo=oracle&logoColor=white"> 
- 데이터 <img src="https://img.shields.io/badge/python -3776AB?style=for-the-badge&logo=python&logoColor=white"> <img src="https://img.shields.io/badge/tensorflow -FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"> 
- 협업툴 <img src="https://img.shields.io/badge/github  -181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion -000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/googledrive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white">  <img src="https://img.shields.io/badge/googlesheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white"> 
- 디자인 <img src="https://img.shields.io/badge/figma -F24E1E?style=for-the-badge&logo=figma&logoColor=white">
  <br>
  
## 4-1. 서비스 아키텍쳐


<br>

## 5. 프로젝트 구조
전체구조: https://github.com/kimhsno1/ASOPI/issues/3#issue-2109363695

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

## 6. 화면 흐름도

![화면 흐름도](https://github.com/kimhsno1/ASOPI/assets/67044951/a99b3c55-9e7b-41ca-9394-d7e46fce7ba4)

<br>

## 7. 페이지별 기능

#### 1. 메인페이지

- 서비스 접속 초기회면으로 서비스 상세설명과 서비스 시작 버튼 

#### 2. 로그인 페이지
- 아이디(이메일), 비밀번호 폼제출 형식으로 구성
- 로그인 방식 2가지 1) 자체 앱 로그인 2) 카카오 계정 로그인
- 회원 가입 방식 2가지 1) 자체 앱 회원 가입 2) 카카오 계정회원 가입

- 로그인 성공 및 실패
  - 로그인 성공: 모달창 출력 -> 마이페이지 이동 or 진단서비스 페이지 이동
  - 로그인 실패: 로그인 실패 경고창 출력

#### 3. 회원가입 페이지
> 전체 폼  미충족시 경고창 출력
- 이름/닉네임 
- 이메일(아이디) 입력
- 비밀번호 입력
- 비밀번호 필수 조건(영문자, 숫자, 특수문자 8~16문자) 미충족시 경고창 출력
- 비밀번호 확인창 입력
- 비밀번호 일치 여부 확인 기능 
- 생년월일 입력
- 성별 입력

#### 4. 진단페이지
- 자녀정보 입력
   - 이름 및 나이/개월 수 
- 저장하기 버튼 클릭 후 로컬스토리지에 저장
- 사진 
  - 사진 촬영 
  - 사진 선택
- 사진 업로드 후
  - 업로드 취소 버튼 생성 → 취소 버튼 클릭시 사진 삭제
  - 진단 시작하기 버튼 생성 → 분석 중 모달창 출력 및 결과페이지 이동
 
#### 5. 결과페이지
- 감지한 병변 및 사진 출력
- 진단결과 
- 아이 정보
- 진단병명과 질환 정의 및 증상 설명 출력
- 근처 병원 보러 가기  → 카카오 맵으로 연결
- 다시 진단하기 버튼  → 진단페이지로 연결

#### 6. 마이페이지
- 진단내역(아코디언 요소)
- 진단 히스토리 디비 연동 
- 내 주변 병원 보러 가기  → 카카오 맵 연결
- 연고 성분 컨텐츠 연결

#### 7. 자체컨텐츠
- 모달창 출력
- 피부 질환 대표 성분 4가지  → 버튼 클릭 시 성분에 대한 설명으로 이동
- 컨텐츠 공유 버튼 

#### 8. 맵 페이지
- 검색 창 및 버튼
- 맵에 마커 위치 표시 → 마커 클릭시 카카오 웹 길찾기로 연동 
- 장소목록 출력
  - 최대 15개 
  - 페이지 이동 버튼

## 8. 트러블 슈팅

- ### 소아 피부 질환 이미지 데이터 수집 
1.  플랜 A: AI허브 이용 신청 후 모델 소스 파일 반출신청

  - AI 허브 이용 신청 절차: 필수 제출 서류 중 e-irb의 연구 승인이 허락된 파일이 요구됨
  - e-irb 모든 팀원 가입 및 책임연구자 팀장으로 연구계획서 제출 2024.1.5
  - e-irb 연구계획서 1차 수정 요청: 팀원 학력 및 직업입력 및 연구계획서 수정 후 제출 완료 2024.1.9

  - e-irb 연구계획서 2차 수정 요청 2024.1.16: 프로젝트 기간이 얼마남지 않아 AI hub 이용 철회

2. 플랜B: 이미지 데이터 크롤링 및 로보플로우에서 수집
- hugging face에서 피부 질환 이미지를 사용하려 했으나 소아 피부질환과는 맞지 않는다는 판단

 **로보 플로우 및 구글 크롤링으로 데이터 수집으로 결정**

- ### 모델 설정
1. skin-gpt4사용을 고려했으나 대화형 기반 + 모델이 복잡해 기각
2. skin-gpt 사용 고려했으나 모델의 학습률이 높아 질수록  단순 피부질환을 설명하는 것이 아닌 이미지 객체에 대해서 설명으로 기각
3. YOLO모델 사용 고려했으나 객체 인식 기반의 모델을 사용하려 했으나 피부 질환을 인식하는 것에 한계를 느낌
4. **CNN 기반의 이미지 분류 모델 설정으로 결정**<br>
단순하지만 정답데이터인 30개의 피부질환 이미지를 넣고 학습시킬 수 있으며 정확도가 높음

- ### 프론트엔드 & 백엔드 연결  이슈
1. 프론트 백연결 프록시 사용
- 토큰 및 백과 프론트 연결이 불가능 
해결: 연결에 문제 발생 모든 엔드포인트 절대 경로로 사용

2. 회원가입 페이지: 이메일 백엔드로 넘어오지 못함.
중복 이슈 발생: HTML 요소들의 ID가 중복되어 문제 발생 ID는 문서 내에서 고유해야 한다는 특성

[수정 전] 
```
 <div id="email"> 
<div id="email_title">
<label for="email">이메일</label>
</div>  
<input type="email" id="email" name="email" required> </div>
```
[수정 후]

```
<div id="email_section">
  <div id="email_title">
    <label for="user_email">이메일</label>
  </div>
  <input type="email" id="user_email" name="email" required>
</div>
```

3. 로그인 페이지
- 로그인 후 URL에 아이디와 패스워드가 노출됨.
- 비밀번호가 일치해도 백엔드로 넘어가지 못하는 문제 발생 즉, 로그인이 성공하지 못함. 
>- 해결방안: 백엔드 엔드포인트 절대경로로 설정


 
<br>

## 9. 프로젝트 기간


- 프로젝트 기간: 2024.1.8 ~ 2024.2.13

- [WBS 일정 관리](https://docs.google.com/spreadsheets/d/1Fmqh2wlDSm3Fi7wS1yaInw9OP3layi3K6aHE79gkuOg/edit?usp=sharing)   

<br>

## 10. 프로젝트 후기
