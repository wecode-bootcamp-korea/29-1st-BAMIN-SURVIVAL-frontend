# 배민서바이벌

- 우아한 형제들 관련 커머스 사이트인 <a href="https://store.baemin.com/">배민문방구</a> 클론 프로젝트
- 짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론을 진행하였습니다.
- 발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 진행하였습니다.

## **프로젝트 참여인원**

- **Frontend**
  - 💪🏻💪🏻 한신웅
  - 🔥🔥 주지홍
  - 🧐🧐 임채현
- **Backend**
  - 🐻‍❄️🐻‍❄️ 최희택

## **프로젝트 기간**

- 2021.01.24 ~ 2021.02.11 <br><br>

## **기술스택**

- **tools**

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white">
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">

- **frontend**

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

- **backend**

<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">

## **구현 목표**

- 사용자가 해당 홈페이지에 방문하구 구매를 진행하는 것 까지를 구현 목표로 설정하고 프로젝트를 진행하였습니다.

### 필수 구현 사항

- 로그인과 회원가입 기능 ✅
- Survival 제품 소개 리스트(메인페이지) ✅
- 상세페이지 ✅
- 장바구니 ✅
- 결제 창 ✅
- 마이페이지 ✅

### 추가 구현 사항

- 제품 리스트 구현 ✅
- 서바이벌 멘토 소개 페이지 ✅
- 제품 사용기를 공유할 수 있는 피드 시스템 만들기

## **구현 파트**

- 임채현: 로그인/회원가입/마이페이지
- 주지홍: 메인페이지/상세페이지
- 한신웅: nav/Footer/장바구니/결제페이지/멘토페이지

## 시연

### **Nav**

- 로그인 완료 후 유저 닉네임, 포인트, 장바구니 수량 상단에 적용
- 스크롤 이벤트
- 선택 된 카테고리 CSS 적용

<img src="https://i.ibb.co/0Z6xQZM/ezgif-com-gif-maker-1.gif" alt="ezgif-com-gif-maker-1" border="0">

### **회원가입/로그인페이지**

- 회원가입시 다양한 유효성 검사 (양식검사, 중복검사, 비밀번호 불일치 검사)
- 검사를 통과하지 못할 경우 입력칸 아래에 경고 문구 출력
- 양식검사, 중복검사를 모두 통과할 경우 사용가능
- 출력 경고 문구가 남아있을 시 회원가입 불가
- 출력 경고 문구가 사라졌을시 회원가입 가능

<img src="https://i.ibb.co/KhVx7K8/Hnet-image.gif" alt="Hnet-image" border="0"> 
<img src="https://i.ibb.co/XxNtX9b/Hnet-image-1.gif" alt="Hnet-image-1" border="0">
<img src="https://i.ibb.co/SymVwr9/Hnet-image-2.gif" alt="Hnet-image-2" border="0">
<img src="https://i.ibb.co/jWLCtb5/Hnet-image-3.gif" alt="Hnet-image-3" border="0">

### **메인페이지**

- 메인페이지 상단 이미지슬라이드 구현
- 분류 기준 (최신순 / 높은가격순 / 낮은가격순 )에 따른 제품 리스트 렌더링
- 쿼리스트링을 활용하여 카테고리 페이지 구현 및 페이지네이션 기능 구현

<img src="https://i.ibb.co/Q82y4vy/image.gif" alt="image" border="0">
<img src="https://i.ibb.co/ZGQrBwc/image.gif" alt="image" border="0">

### **상세페이지**

- 인풋창 조건에 따른 수량입력
- 로그인 상태일 때 장바구니로 구매버튼을 눌렀을때 장바구니로 넘어가도록 구현
- 비 로그인 상태일 때 장바구니로 구매버튼을 눌렀을때 장바구니로 넘어가도록 구현
- 제품 상태에 따른 상세페이지 렌더링 화면 변경

<img src="https://i.ibb.co/yhBQNfq/image.gif" alt="image" border="0">
<img src="https://i.ibb.co/6WFfM16/ezgif-com-gif-maker.gif" alt="ezgif-com-gif-maker" border="0">
<img src="https://i.ibb.co/tDCbcjt/image.gif" alt="image" border="0">
<img src="https://i.ibb.co/6WFfM16/ezgif-com-gif-maker.gif" alt="ezgif-com-gif-maker" border="0">

### **장바구니**

- 상세페이지에서 유저가 옵션과 수량을 결정한 아이템을 장바구니에 렌더링
- ‘옵션 / 수량 변경’ 버튼 클릭시 모달 창이 뜨고 원하는 조건 변경 가능
- 리스트에서 체크를 통해 아이템 선택 삭제 및 구매 가능
- 구매 후 구매 완료 페이지로 이동

<img src="https://i.ibb.co/SvHSkp0/image.gif" alt="image" border="0">

## Build Installation

### install dependencies

`$ npm install`

### serve with hot reload at localhost:3000

`$ npm start`

## Reference

- 이 프로젝트는 배민문방구 사이트를 참조하여 학습목적으로 만들어진 사이트입니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 해당프로젝트에서 나온 이미지는 모두 가공되어진 자료입니다.
