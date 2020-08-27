# Bmart Team 9

## Project Description

## 
<p align="center">
  <img src="https://user-images.githubusercontent.com/34447105/90772561-b2be3780-e32f-11ea-9ae3-04bd46ea2144.png" width="300"/>
</p>
- [우리의 활동 로그(<)](https://github.com/woowa-techcamp-2020/bmart-9/wiki)
- [**리뷰**](https://github.com/woowa-techcamp-2020/bmart-9/pulls?q=is%3Apr+is%3Aclosed) 중심의 협업

## 기술 스택

![title](https://img.shields.io/badge/-React-61DAFB?&logo=React&logoColor=white)
![title](https://img.shields.io/badge/-Typescript-4075bb?&logo=TypeScript&logoColor=white)
![title](https://img.shields.io/badge/-Next.js-000000?&logo=Next.js&logoColor=white)
![title](https://img.shields.io/badge/-Prettier-F7B93E?&logo=Prettier&logoColor=white)
![title](https://img.shields.io/badge/-StyledComponent-CF7692?&logo=styled-components&logoColor=white)
![title](https://img.shields.io/badge/-Node.js-339933?&logo=Node.js&logoColor=white)
![title](https://img.shields.io/badge/-Express-191919?&logo=Node.js&logoColor=white)
![title](https://img.shields.io/badge/-JWT-000000?&logo=JSON-Web-Tokens&logoColor=white)
![title](https://img.shields.io/badge/-Passport-32dd65?&logo=&logoColor=white)
![title](https://img.shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white)
![title](https://img.shields.io/badge/-EC2-232F3E?&logo=Amazon-AWS&logoColor=white)
![title](https://img.shields.io/badge/-Github-181717?&logo=Github&logoColor=white)
![title](https://img.shields.io/badge/-Slack-4A154B?&logo=Slack&logoColor=white)

## Quick Start

### Installation

```
git clone https://github.com/woowa-techcamp-2020/bmart-9.git
cd bmart-9
npm install # server & client 폴더 각각으로 이동해서 진행해야 함
```

### ENV 설정

**[server/.env.sample](https://github.com/woowa-techcamp-2020/bmart-9/blob/ed90a8a8b777e0647dad11bb4d231528db765d1a/server/sample.env#L1) 파일을 참고하여 server/.env 파일을 생성해주시기 바랍니다.**

```
DB_HOST=Ip address of your database
DB_USER=Username of your database
DB_NAME=name of your database
DB_PASS=password of your databse
JWT_TOKEN=something like secret key
GITHUB_CLIENT_ID=What you get from github developer settings
GITHUB_CLIENT_SECRET=What you get from github developer settings
```

> [Github Developer Setting](https://github.com/settings/developers)

### Start

Dev

```
cd client && npm run dev
cd server && npm run dev
```

Prod

```
cd server && npm run build # build 후 자동으로 실행
```

## [데이터베이스 ERD](https://github.com/woowa-techcamp-2020/bmart-9/wiki/bmart-erd)

<img src="./https://user-images.githubusercontent.com/19217576/91324215-c91b3600-e7fc-11ea-996f-6a7d53dcbb81.png" alt="ERD" />

