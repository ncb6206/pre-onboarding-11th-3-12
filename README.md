# 깃허브 레포지토리 이슈 목록, 상세 내용 조회 웹사이트

특정 GitHub 저장소의 이슈 목록 및 상세 정보를 조회할 수 있는 웹 기반 인터페이스입니다.

- [**`배포링크`**](https://pre-onboarding-11th-3-12.vercel.app/)

<br>

## 📌 프로젝트 시작

```
$ npm install
$ npm start
```

<br>

## 📌 기능 목록

## Home

> `/` 경로에서 Github REST API를 활용하여 특정 Github Repository Issues들을 List 형태로 나열합니다. <br>
> OPEN 상태의 이슈 중 코멘트가 많은 순으로 정렬합니다.<br>
> 각 행에는 '이슈번호, 이슈제목, 작성자, 코멘트수'를 표시합니다.<br>
> 다섯번째 셀마다 개인 깃허브 주소로 이동하는 배너를 넣었습니다.<br>

<br>

| 데모영상      | 
| ------------------ | 
| <img width=600 src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/3ad5fb69-3b57-449b-9a13-d0f8fe9b3fea"/> |

- 이슈 목록 가져오기 : `Query parameters`와 header에 Github에서 발급받은 access token을 담아서 요청하고 데이터를 응답받습니다. <br><br> - open 상태의 이슈 중 코멘트가 많은 순으로 정렬 : `Query parameters`에 `?sort=comments`으로 요청 시 내림차순으로 응답받습니다. <br><br>open 상태는 `state default : open`으로 설정하지 않아도 됩니다. <br><br> - 다섯번째 셀마다 광고 이지미 출력 : List를 나열하는 부분에서 조건문으로 구현했습니다.
<br><br>

## Detail

> `/detail:issueNumber` 경로로 이동 후 이슈의 상세 내용을 표시합니다. <br>
> '`이슈번호`, `이슈제목`, `작성자`, `작성일`, `코멘트 수`, `작성자 프로필이미지`, `본문`'을 표시합니다.

<br>

| 데모영상      | 
| ----------- |
| <img width=600 src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/25ff6ecd-ef57-4ace-be76-03f10e69a4be"/> |  

- 각 데이터들을 표시하기 : `useParams`를 활용하여 issue번호를 받고 `axios`, `context API`통해 데이터를 응답받습니다. <br><br> - `Markdown` 형식 본문 표시하기 : `react-markdown`라이브러리를 이용해서 구현했습니다.
<br><br>

## Not found

> 주소창에 유효하지 않은 URL을 입력하면, 해당 요청에 대해 에러 페이지가 렌더링됩니다. <br>

<br>

| 데모영상          |       
| ------------ | 
| <img width=600 src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/bf66f8ea-5d72-43fb-9202-181e20b5b015"/> |    

- 이는 라우팅을 관리하는 컴포넌트에서 `<Route path="/*" element={<NotFoundPage />} />` 코드를 통해 구현되며, 이 코드는 모든 잘못된 경로에 대해 `NotFoundPage` 컴포넌트를 반환합니다.
<br><br>

## Loading

> 데이터 요청 중 `Loading UI`를 표시합니다. <br>

<br>

| 데모영상        | 
| --------------- | 
| <img width=600 src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/57957d42-c4d0-4c53-9b7c-6e315b811115"/> | 

- `Loading UI` 구현 : API를 호출하는 함수 안에서 `setState(true)`로 시작하고 API요청이 완료 되면 `setState(false)`로 바뀌는 시점을 이용하여 구현했습니다.
<br>

<br>

## 📌 기술 스택 & 사용 라이브러리

| 구분            | 스택 & 라이브러리                                                                                                                                                                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 언어            | <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">                                                                                                         |
| 메인 라이브러리 | <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">                                                                                                                                                                                                                                 |
| 기타 라이브러리 | <img alt="Static Badge" src="https://img.shields.io/badge/CSS-Emotion-%235A29E4?style=for-the-badge"><img alt="Static Badge" src="https://img.shields.io/badge/ReactMarkdown-%230088CC?style=for-the-badge&logo=markdown"><img alt="Static Badge" src="https://img.shields.io/badge/Axios-%235A29E4?style=for-the-badge&logo=axios"> |
| 패키지 관리     | <img alt="Static Badge" src="https://img.shields.io/badge/npm-%23CB3837?style=for-the-badge&logo=npm">                                                                                                                                                                                                                               |
| 배포            | <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">                                                                                                                                                                                                                               |

## 📌 컨벤션

> 폴더 구조 관리

- src > 디렉토리는 소문자로 명명 (components, pages 등)
- src > 디렉토리 > 디렉토리(파스칼 case) > index 사용

- ex: src > components > Layout > index.tsx

<br>

> 커밋 컨벤션

- 커밋 구분은 아래 블럭의 용도에 맞게 사용하여 해당 커밋의 작업을 파악할 수 있도록 합니다.
- 커밋 구분을 제외한 내용은 한글로 작성하여 직관적으로 커밋의 변경사항을 파악할 수 있도록 합니다.

```
Init : 초기 세팅
Feat : 기능 (새로운 기능)
Fix : 버그 (버그 수정)
Design : CSS 등 사용자 UI 디자인 변경
Style : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
Refactor: 리팩토링
Comment : 필요한 주석 추가 및 변경
Docs : 문서 (문서 추가, 수정, 삭제)
Test : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
Chore : 기타 변경사항 (빌드 스크립트, 패키지 매니저 설정 수정 등)
Rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
Remove : 파일을 삭제하는 작업만 수행한 경우
!HOTFIX : 급하게 치명적인 버그를 고쳐야하는 경우
!BREAKING CHANGE : CHANGE 커다란 API 변경의 경우
```

## 📌 ETC

같은 주제로 프론트엔드 개발자 6명이서 협업을 진행하였습니다.
- [**`팀깃허브 링크`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12)
