const express = require('express');
const morgan = require('morgan');
const { engine }  = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // Khi gặp url kiểm tra trong public của path thông qua hàm static

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname:'.hbs'
})); // Định nghĩa ra 'handlebars' = handlebar đã gọi
app.set('view engine', 'hbs'); // Thiết lập view engine chính là handlebars đã định nghĩa ở trên -> tên phải giống nhau
app.set('views', path.join(__dirname, 'resources/views')) // Thử viên path - quản lý path folder node

// Route
app.get('/', (req, res) => {
    // return res.send(`<h1>Hello World!</h1>`);
    res.render('home');
});

app.get('/news', (req, res) => {
    // return res.send(`<h1>Hello World!</h1>`);
    res.render('news');
});

// localhost - 127.0.0.1
app.listen(port, () => console.log(`Example app listening on port ${port}`));