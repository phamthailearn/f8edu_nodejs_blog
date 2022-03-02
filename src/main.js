const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();
const port = 4000;

app.use(morgan('combined'));

app.engine('handlebars', engine({
    extname: '.hbs'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use('/', (req, res) => {
    // return res.send('Hello World!');
    res.render('home');
})

app.listen(port, () => {
    console.log(`App running at ${port}`);
})