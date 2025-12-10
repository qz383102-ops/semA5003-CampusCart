# semA5003-CampusCart
5003 group project
## Structure
```bash
semA5003-CampusCart/
├── Campus-Cart/
│   ├── client/
│   │   ├── public/
│   │   └── src/
│   │      ├── components/
│   │      ├── pages/
│   │      ├── utils/
│   │      └── App.js
│   └── server/
│       ├── controllers/
│       │   ├── cart.controller.js
│       │   └── products.controllers.js
│       ├── services/
│       │   ├── cart.service.js
│       │   └── product.service.js
│       ├── db/
│       │   ├── cart.db.js
│       │   └── product.db.js
│       └── index.js
├── 5003.mp4
└── README.md
```
## dependencies
Dev Dependencies
```bash
  "nodemon": "^3.1.11"
  "concurrently": "^7.6.0"
```
Client
```bash
  "react": "^18.2.0"
  "react-dom": "^18.2.0"
  "react-router-dom": "^6.21.1"
  "vite": "^5.0.10"
  "tailwindcss": "^3.4.0"
  "axios": "^1.6.2"
  "react-hook-form": "^7.49.2"
```
Server
```bash
  "express": "^4.18.2"
  "pg": "^8.8.0"
  "bcryptjs": "^2.4.3"
  "jsonwebtoken": "^8.5.1"
  "helmet": "^4.4.1"
  "cors": "^2.8.5"
```
## run locally
Clone the project
```bash
  git clone https://github.com/qz383102-ops/semA5003-CampusCart.git
```
Go to server directory and install dependencies
```bash
  npm install
```
Go to client directory and install dependencies
```bash
  npm install
```
Start both client and server concurrently from the root directory
```bath
  npm run dev
````
