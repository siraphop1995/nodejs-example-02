# Express (Starter Kit 02)

A template to start using express

## Dependencies
- [express](https://github.com/expressjs/express)
- [mongoose](https://github.com/Automattic/mongoose)
- [cors](https://github.com/expressjs/cors)
- [http-status](https://github.com/alexsasharegan/http-status)
- [dotenv](https://github.com/motdotla/dotenv)

## Installation

Install dependencies
```
npm install --save
```
Start docker at port `27017`:  
```
docker run -d --name mongo -p 27017:27017 mongo
```
Create a file named `.env` with the content below:  
```
PORT=3000
MONGO_URL=mongodb://localhost:27017/user
```
## Usage
Test server locally
```
npm start
```

Routes:

- `GET /user` - get all users
- `POST /user` - create a user
- `GET /user/:userId` - get a user
- `POST /user/:userId` - update a user
- `DELETE /user/:userId` - delete a user

## Table
These are example table for `README.md`

| Example | Description | Usage |
| ------- | ----------- | ----- |
| `Ex01` | Desc 01 | Test |
| `Ex02` | Desc 02 | Test |
