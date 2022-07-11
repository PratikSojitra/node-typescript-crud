import express, { Application, NextFunction, Request, Response } from 'express';
import path from 'path'

const app: Application = express();
const router = require('./router')
app.use('/', router)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});