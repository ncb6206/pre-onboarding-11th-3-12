# 깃허브 레포지토리 이슈 목록, 상세 내용 조회 웹사이트

특정 GitHub 저장소의 이슈 목록 및 상세 정보를 조회할 수 있는 웹 기반 인터페이스입니다.

<br>

## 📌 기능 목록

## Home

> 사용자가 Github Repository를 입력하면 Github REST API를 활용하여 특정 Github Repository Issues들을 List 형태로 나열합니다. <br>
> OPEN 상태의 이슈 중 코멘트가 많은 순으로 정렬하며 각 행에는 '이슈번호, 이슈제목, 작성자, 코멘트수'를 표시합니다.<br>

<br>

| 데모영상    | 
| -------------- | 
| <img width=600 src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/3ad5fb69-3b57-449b-9a13-d0f8fe9b3fea"/> |

- **레포지토리 URL 입력** : 사용자가 특정 GitHub 레포지토리의 URL을 입력하면, 해당 URL에서 `Organization`과 `Repository` 정보를 추출하는 기능을 구현하였습니다. <br><br>
- **이슈 목록 가져오기** : `Query parameters`와 header에 Github에서 발급받은 액세스 토큰을 담아서 이슈 목록을 요청하고 데이터를 응답받습니다.  <br><br>
- **open 상태의 이슈 중 코멘트가 많은 순으로 정렬** : `Query parameters`에 `state=open&sort=comments&per_page=16`으로 요청 시 페이지당 16개의 열린 상태(open) 이슈를 코멘트가 많은 순서로 정렬하여 응답받습니다. <br><br>
- **무한 스크롤 구현** : `tanstack query(react query)`와 `react-intersection-observer` 라이브러리를 활용하여 사용자가 페이지의 끝에 도달했을 때 추가적인 데이터를 자동으로 로드하고 표시하는 무한 스크롤 기능을 구현하였습니다. <br><br>
- **다섯번째 셀마다 개인 깃허브 배너 출력** : 리스트를 생성하는 과정에서 인덱스 값을 활용한 조건문으로, 각 리스트의 다섯 번째 셀마다 개인 깃허브 배너가 출력되도록 하였습니다.
<br><br>

## Detail

> `/detail:issueNumber` 경로에 접근 시, 해당 이슈의 상세 정보를 사용자에게 제공합니다. <br>
> 이때 표시되는 정보는 '`이슈번호`, `이슈제목`, `작성자`, `작성일`, `코멘트 수`, `작성자 프로필이미지`, `본문`'을 표시합니다.

<br>

| 데모영상      | 
| ----------- |
| <img width=600 src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/25ff6ecd-ef57-4ace-be76-03f10e69a4be"/> | 
- 각 데이터 항목 표시 : `useParams`를 사용하여 이슈 번호를 추출하고, `axios` 및 `context API`통해 데이터를 응답받습니다. 
- `Markdown` 형식의 본문 표시 : `react-markdown`라이브러리를 활용하여 Markdown 형식의 본문을 정상적으로 표시할 수 있도록 하였습니다.
<br><br>

## Not found

> 사용자가 주소창에 유효하지 않은 URL을 입력할 경우, 해당 요청에 대응하는 에러 페이지가 렌더링되도록 설정하였습니다. <br>

<br>

| 데모영상          |       
| ------------ | 
| <img width=600 src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/bf66f8ea-5d72-43fb-9202-181e20b5b015"/> |    

- 이 기능은 라우팅을 관리하는 컴포넌트 내의 `<Route path="/*" element={<NotFoundPage />} />` 코드를 통해 구현되었습니다. 이 코드는 모든 유효하지 않은 경로에 대해 NotFoundPage 컴포넌트를 반환하도록 설계되었습니다.
<br><br>

## Loading

> 데이터 요청 과정에서는 사용자에게 Loading UI를 제공합니다. <br>

<br>

| 데모영상        | 
| --------------- | 
| <img width=600 src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/57957d42-c4d0-4c53-9b7c-6e315b811115"/> | 

- `Loading UI` 구현에 있어서는 `tanstack query(react query)`를 활용하였습니다. <br>
데이터를 가져오는 동안의 로딩 상태는 `isFetching` 속성을 통해 추적하며, `isFetching`이 `true`일 경우에는 `Loading UI`가 표시됩니다. <br>
반대로, `isFetching`이 `false`가 되면 요청한 데이터가 표시되도록 설계하였습니다.

<br>

## 📌 프로젝트 개발 환경 세팅

```
$ npm install
$ npm start
```

<br>

## 📌 기술 스택 & 사용 라이브러리

| 구분    | 스택 & 라이브러리   |
| --------- | --------------- |
| 언어            | <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">     |
| 메인 라이브러리 | <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">    |
| 기타 라이브러리 | <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black"> <img alt="Static Badge" src="https://img.shields.io/badge/Emotion-%235A29E4?style=for-the-badge"> <img alt="Static Badge" src="https://img.shields.io/badge/ReactMarkdown-%230088CC?style=for-the-badge&logo=markdown"> <img alt="Static Badge" src="https://img.shields.io/badge/Axios-%235A29E4?style=for-the-badge&logo=axios"> <br> <img alt="Static Badge" src="https://img.shields.io/badge/lodash-3492FF?style=for-the-badge"> <img alt="Static Badge" src="https://img.shields.io/badge/tanstack query-FF4154?style=for-the-badge&logo=tanstackquery"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge">|
| 패키지 관리     | <img alt="Static Badge" src="https://img.shields.io/badge/npm-%23CB3837?style=for-the-badge&logo=npm">    |
| 배포            | <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">    |

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

동일한 주제에 대해 프론트엔드 개발 팀의 6명의 멤버들이 협력하여 프로젝트를 진행하였습니다.
- [**`팀깃허브 링크`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12)
