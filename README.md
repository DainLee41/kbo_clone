### 폰트 설치하기

- 한문: pretendard
  npm i pretendard 를 이용해 프리텐다드 설치
  globals.css 에 fontfamily로 pretendard 추가

## 오류 정리

> A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.

컴포넌트가 클라이언트에서 렌더링되고 있어 비동기 처리가 이루어지지 않고 있음.

- useState를 사용해 데이터를 저장할 상태 변수 정의

- useEffect를 통해 컴포넌트가 렌더링될 때 비동기 데이터를 가져오는 함수를 호출함
