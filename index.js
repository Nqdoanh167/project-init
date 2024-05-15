/** @format */

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const initRoute = require('./routes/initRoute');
const app = express();
app.use(express.json());

app.use('/api/v1/init', initRoute);

app.all('*', (req, res, next) => {
   next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler);

const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => {
   console.log('DB connection successfully!');
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
   console.log(`Server is listening on port ${port}`);
});
