# Project_Solar_Front

This repository Frontend for Last-Project with Solar Design

## issue

6/21 -은지-

- styled components install 시 에러 발생

```sh
npm ERR! Cannot read properties of null (reading 'edgesOut')
```

=> styled-components ver6 에서 발생하는 이슈로, npm install styled-components@5.3.10으로 다운받음

```sh
npx create-react-app front
npm install styled-components@5.3.10
npm install react-router-dom axios
npm install web3
```

react-app-rewired : Eject 사용 안할 수 있도록 도와줌?

```
solarswap.com
             / (메인) - 그리기 완료
             /assets (내자산) - 그리기 완료
             /exchange/swap (스왑) - 그리기 진행중
                      /pool (일반페어예치)
             /staking (스테이킹)
             /governance/ (의제투표)
                        /create (투표제안) - 그리기 완료
             /dashboard (대쉬보드)
```

6/23 -은지-

**기본 디렉터리 구조**

```
- /src

-- /routes
---- index.tsx


-- /pages (섹션 별로 나눈 애들이 모으는 곳 => 한 페이지에 표현될 큰 요소들을 묶어놓음)
----- index.tsx [main]


-- /organisms (섹션을 구성할 단위들)
---- /components (반복적으로 쓰이는 부분들만 정리)
-------/button

---- /contexts or /store (전역 상태 관리)

---- /layouts (차후 수정할지도 모를 상황을 대비하여 상황에 맞는 레이아웃에 대한 디렉터리를 구성)
-------/baseLayout
---------/header
---------/footer

---- /contents
------- /main (메인에 필요한 섹션들을 묶는 파일, 차후 얘네들을 pages 디렉터리 안에 올바른 파일에 쑤셔넣으면 됨)
---------/SectionFirst (로테이트, 버튼 모아놓은 첫번째 섹션)
---------/MainArticleFirst (두번째 섹션)
---------/MainArticleSecond (세번째 섹션)

---- /hooks


-- app.tsx


-- index.tsx
```

전역상태 관리 툴 -> 리액트 쿼리 + 리코일
리액트 쿼리는 통신에 대한 전역상태를 관리해주고
리코일은 클라이언트의 전역상태를 관리해줌???

```sh
npm install @tanstack/react-query @tanstack/react-query-devtools
npm install recoil
```

- De-fi 서비스가 실시간 데이터를 중요시 하는 만큼 리액트 쿼리의 컨셉에 따라 최신 정보를 빠르게 불러올 수 있는 것이 장점이라고 생각
- 블록체인 네트워크와 통신을 하는 만큼 클라이언트에서의 상태는 서버와 통신할 필요가 없기 때문에 통신에 대한 상태와 구별해야 할 필요성이 있다고 판단
  => 상태에 따라 content 변화 등을 관리할 때에/// 까먹음...
