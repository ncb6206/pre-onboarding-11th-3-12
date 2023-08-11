# 깃허브 레포지토리 이슈 목록과 상세 내용 조회 웹사이트

특정 깃허브 레포지토리의 이슈 목록과 상세 내용을 조회할 수 있는 웹사이트 구축

- [**`배포링크`**](https://pre-onboarding-11th-3-12.vercel.app/)

<br>

## 📌 프로젝트 시작

```
npm install
npm start
```

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
