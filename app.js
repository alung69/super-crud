import mysql from 'mysql';
import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());

app.use(userRoutes);

app.set("view engine", "ejs");
app.set("views", "views");


app.listen(3000, () => console.log("Server running on port 3000.."));