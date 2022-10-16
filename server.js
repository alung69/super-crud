import mysql from 'mysql';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path'

const app = express();

app.set("view engine", "ejs");
app.set("views", 'views');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static('public'))
app.use(userRoutes);

app.listen(3000, () => {
    console.log("server running on port 3000 🚀");
})