const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// Body-parser
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route
route(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
