const dotenv = require('dotenv');
const express = require('express');
const cookieParser =require("cookie-parser");

const app = express();


dotenv.config({path: './config.env' });
const port = process.env.PORT; 


require('./db/conn');

app.use(cookieParser());
app.use(express.json());
app.use(require('./router/auth'));


app.get('/', (req, res) => {
    res.send(`Hello world from home page`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello world from contact page`);
});
app.get('/aboutus', (req, res) => {
    res.send(`Hello world from aboutus page`);
});
app.get('/signin', (req, res) => {
    res.send(`Hello world from sign page`);
});
app.get('/signup', (req, res) => {
    res.send(`Hello world from signup page`);
});
app.get('/donate', (req, res) => {
    res.send(`Hello world from signup page`);
});
app.get('/errorpage', (req, res) => {
    res.send(`Hello world from signup page`);
});

app.listen(port, ()=> {
    console.log(`running at  server ${port}`);
})
