const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const process = require('process');
const errorHandler = require('./src/utils/errorHandler')

//Readind .env file
const dotenv = require('dotenv');
dotenv.config();

app = express();
port = process.env.PORT || 3000;

User = require('./src/models/userListModel');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, function(
  error
) {
  if (error) throw error;
  console.log('Successfully connected');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRouter = require('./src/routes/userRouter');

app.use(userRouter);

app.use(errorHandler);

// function errorHandler(err, req, res, next) {
//   console.error(err);
//   let newError = {
//     message: err.message
//   };
//   res.status(500).send(newError);
// }

app.listen(port, () => {
  console.log('Start listen on port: ' + port);
});
