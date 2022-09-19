# Wanted Pre-Onboarding 6차 10팀 TenKeyLess, thingsflow 기업과제

## 🌏 배포링크

http://wanted610.s3-website.ap-northeast-2.amazonaws.com/

## 👋 팀원소개

<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/HE-SW">
            <img src="https://avatars.githubusercontent.com/HE-SW" width="140px" /> <br>김한얼</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/eazae">
            <img src="https://avatars.githubusercontent.com/eazae" width="140px" /> <br>신이재</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/blackgar">
            <img src="https://avatars.githubusercontent.com/blackgar" width="140px" /> <br>윤관 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/jihyun-jeon">
          <img src="https://avatars.githubusercontent.com/jihyun-jeon" width="140px" /> <br> 전지현</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/Dev-jwJeong">
            <img src="https://avatars.githubusercontent.com/Dev-jwJeong" width="140px" /> <br>정재욱</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/qkrwlstjd">
            <img src="https://avatars.githubusercontent.com/qkrwlstjd" width="140px" /> <br> 박진성 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/seungyeonchoo">
            <img src="https://avatars.githubusercontent.com/seungyeonchoo" width="140px" /> <br> 추승연 </a> <br></td>
    </tr>
<tr>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
    </tr>
</table>
<br>

> ## 목차

- [프로젝트 개요](#프로젝트-개요)
- [폴더 구조](#폴더-구조)
- [기능별 설명 / Best Practice](#기능별-설명--best-practice)
- [미구현 내용](#미구현-내용)
- [회고](#회고)

<br>

> ## 프로젝트 개요

- API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현

  [과제 구현 명세](https://github.com/walking-sunset/sparkpet-assignment)

<br>

> ## 프로젝트 진행방법

    팀에서 Redux를 처음 도입하게 된 프로젝트여서, 각 팀원의 Redux 경험과 학습기간을 고려하여 각 팀원이 개별적으로 프로젝트를 구현한 뒤, 코드 리뷰를 통해 베스트케이스를 선정하는 방식을 채택했다.

1. 각 팀원별로 필수 기능을 구현한 뒤 코드 리뷰를 진행하고 추가 기능을 구현하도록 진행했다.
2. 추가 기능 구현 뒤, Best Practice를 논의한 뒤 선정하여 메인 브랜치에 병합했다.

  <details>
    <summary>Best Practice 선정 이유</summary>

    - redux-toolkit을 사용해 동작 성공/실패에 따른 기능을 구현했다.
    - createAsyncThunk를 사용해 slice에서 api 호출 관련된 기능을 구현하다 보니 관심사의 분리가 잘 된 것 같고, 코드도 보기 편했다.
    - onChange event의 경우 구조분해 할당을 통해 간결하게 코드를 작성했다.

  </details>

  <br/>

> ## 사용기술

 <br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<!-- <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> -->
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white%22%3E">
<br>
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white%22%3E">
<img src="https://img.shields.io/badge/redux_toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white%22%3E">
<br>
<br>

> ### 해당 기술 선택이유<br>

- React

  - 생태계가 넓고, 다양한 라이브러리 사용 가능
  - virtual DOM을 활용하여 빠른 렌더링 가능
  - 단방향 데이터 바인딩을 통한 디버깅 용이

- Styled-component : css를 컴포넌트화 하여 사용할 수 있다.

- Redux: 복잡한 State관리를 단방향 데이터 흐름체계로 만들 수 있다.

- Redux Toolkit: 순수 redux의 boilerplate 코드를 줄여주고, 상태관리 코드 부분의 가독성을 높여준다. 또한 내부적으로 thunk를 내장하고 있어서, 다른 미들웨어를 사용하지 않고도 비동기 처리를 할 수 있다.

<br/>

> ## 폴더 구조

```
src
 ┣ pages
 ┃ ┗ Home
 ┃ ┃ ┣ CommentForm.jsx
 ┃ ┃ ┣ CommentItem.jsx
 ┃ ┃ ┗ Home.jsx
 ┣ store
 ┃ ┣ commentsSlice.jsx
 ┃ ┗ index.jsx
 ┣ styles
 ┃ ┣ GlobalStyle.tsx
 ┃ ┗ theme.tsx
 ┣ Router.jsx
 ┗ index.jsx
```

> ## 기능별 설명 / Best Practice

### 1. store관리

- store로 관리하는 값 <br/> 1) 전체 comment 리스트 , 2) 수정하는 댓글의 item data , 3) 전체 댓글의 길이 , 4) 현재 페이지 번호

- state에 comment 전체 데이터를 담아놓고, 컴포넌트에서 현재 페이지에 맞는 데이터만 잘라서 사용.

- 댓글 수정,추가,삭제 후 다시 전체 댓글 데이터를 get요청하여 store의 값을 갱신.

- react toolkit의 createAsyncThunk를 이용해 다른 미들웨어 사용없이 비동기 코드 처리함.

- thunkApi를 활용하여 api통신 오류시 rejected상태가 되도록하여 alert 처리.

### 2. 페이지네이션

- store에 전체 데이터의 길이를 저장해 놓고 컴포넌트에서 불러와 댓글 갯수만큼 연산해서 처리.

  </details>

### 3. 댓글 등록창

- input의 name속성과 구조분해 할당을 활용해 모든 input값을 하나의 state로 관리.
  </details>
<br>

> ## 미구현 내용

- 디테일한 UI 작업

<br>

> ## Git

- ### [Git branch 전략](https://github.com/wanted-pre-onboarding-fe-6-10/pre-onboarding-assignment-week-3-2-team-10-TenKeyLess/wiki/Git-branch-%EC%A0%84%EB%9E%B5)

- ### [커밋 컨벤션](https://github.com/wanted-pre-onboarding-fe-6-10/pre-onboarding-assignment-week-3-2-team-10-TenKeyLess/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98)

<br>

> ## Prettier, Eslint

- ### Prettier

```javascript
{
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "singleQuote": true,
  "endOfLine": "auto"
}
```

- ### Eslint

```javascript
{
  "parser": "@typescript-eslint/parser", // eslint를 typescript에서 쓸 수 있도록 변환해줌
  "extends": ["react-app", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "plugins": ["@typescript-eslint", "prettier"],
  "ignorePatterns": ["node_modules/"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-console": ["warn", { "allow": ["warn", "error"] }], // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
  }
}

```

<br>

> ## 회고

### 윤관

### 김한얼

- Redux로 프로젝트를 구상할때 초반의 기획 및 코드 작성 시간이 오래 걸리는 점이 있지만 이후 리팩토링과 에러에 대한 대처에 유연하고 빠르게 수정가능하여서 오히려 코드 작성이후 추가적인 기능을 추가할때는 빠르게 추가하여 적용 할 수 있었다.

- Toolkit 에 내장되어있는 기능을 활용하여 error 값을 확인 할수있었는데 공식문서는 꼼꼼히 읽어서 필요기능들을 활용할수 있어야겠다..

- Middleware 에 대한 이해도가 낮아 강의 때 들었던 기능들을 구현할 수 없어서. 하나의 작업에 여러가지의 dispatch를 불러 작업을 해야만 기능을 완성할수있었다. 추후에는 작업하여서 하나의 dispatch로 상태관리 진행하여 코드의 가독성을 올리고 추상화 작업으로 유연하게 세부기능을 바꿀수 있게 학습해봐야겠다.

### 박진성

### 신이재

1. Redux의 도입<br/>
   Redux를 처음 적용해보았는데, redux store 설계 및 정의 / redux 관련 보조 라이브러리 활용 여부 / duck 패턴 적용 등 고려할 사항이 많아서 개인적으로 어려웠던 프로젝트였던 것 같다. TypeScript로 구현하고자 했는데, type 정의 부분에서도 어려움을 겪었다. 새로운 툴을 활용해 볼 수 있는 기회여서 좋았다.

2. 팀워크<br/>
   새로 도입하게 된 Redux의 적용 및 학습기간을 고려하여 이번 프로젝트의 경우에도 모든 팀원이 각자의 프로젝트를 구현하는 방식을 택했는데, 이 과정에서 다른 팀원들이 Redux를 어떻게 활용했고 프로젝트에 어떻게 적용했는지를 볼 수 있어서 굉장히 많은 도움이 되었다. 나의 코드에서 어떤 부분이 잘못 구현되었는지도 파악하는 기회가 되었다.

### 전지현

- 어떤 값을 store로 관리하는게 좋을지 아직 감이 오지 않아서 store구조를 여러번 수정하곤 했다. 앞으로 프로젝트 시작단계에서 store를 어떻게 설계해야 할지 사고하는 역량을 기워야 할 것 같다.
- 동료학습 : 다른 팀원의 코드를 보고 내 코드에 반영해야 할 사항을 캐치할 수 있었다.

### 정재욱

### 추승연

- Redux 사용 시 모든 action 하나의 reducer에서 처리하도록 코드를 작성하다 보니 관심사의 분리가 제대로 이루어 지지 않는 것 같아서 아쉬웠다.

- 미들웨어에 대한 이해도가 높지 않아 각 컴포넌트 내에서 API를 호출하여 코드의 중복이 많이 발생하게 되었다. 추후 미들웨어 학습을 통해 해당 부분을 개선해봐야 할 것 같다.

- Redux 학습을 위해 Redux-toolkit을 사용하지 않고 Redux로 프로젝트를 진행했는데, Redux의 원리에 대해서는 이해가 많이 된 것 같지만, 코드량이 많아진 것 같다. 해당 부분은 toolkit으로 바꿔서 적용해보면 좋을 것 같다.
