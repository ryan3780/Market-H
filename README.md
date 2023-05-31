# 8시간이 지나서 Readme.md 만 수정하겠습니다.

## 실행 방법
1. git clone https://github.com/ryan3780/Market-H.git
2. 해당 디렉토리로 접근 ex) cd Market-H
3. yarn install
4. yarn server (json-server start)
5. yarn start (새로운 터미널에서 입력)


## 커밋 이력
- 첫 커밋 : 2023년 5월 30일 오전 11시 17분
- 마지막 커밋 : 2023년 5월 30일 오후 19시 05분
- 총 커밋 수 : 26 (Readme.md 커밋 제외)

## 트리 구조
📦src  
 ┣ 📂assets  --- 새로운 상품을 등록하기 위한 이미지  
 ┣ 📂components --- 공통 컴포넌트  
 ┣ 📂layout --- 모든 페이지를 감싸는 레이아웃    
 ┣ 📂pages --- 페이지 모음  
 ┣ 📜App.css  
 ┣ 📜App.js  
 ┣ 📜index.js   
 ┣ 📜router.js  

## 구현
- Admin : 상품 생성 및 삭제
- Products : 상품 리스트
- Detail : 상품 상세 페이지 + 카트에 담는 버튼(계속 누르면 quantity가 증가)
- Cart : 카트 상세 페이지 + 카트에 담긴 상품 삭제

## 사용 스텍
- react-query
- react-router-dom
- json-server
- Material UI

## 객관화
- 설계 미흡 
- API 부분을 따로 모을 수 없는지 
- 반복되는 코드를 따로 분리 할수 없는지
- useQuery 사용 미숙
- 리덕스를 어떤 부분에 적용 시킬 수 있는지
- 익숙하지 않는 UI Framework 사용
- eslint 경고 해결 및 필요 없는 파일 삭제


## 차후 예정
- 미흡한 부분 공부 및 적용
- TS로 변경
- 관리자와 일반 사용자 구분
- 메인 페이지와 NotFound 수정
- vaildation 체크 & 필요한 모달 창 (카트, 수량, 구매 등등)
- 카트 상세 페이지에서 수량 조절 + 총 금액 + 결제

