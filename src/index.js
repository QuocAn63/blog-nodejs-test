const morgan = require('morgan');
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;
const news = require('./app/controllers/NewsController');
const route = require('./routes');
const db = require('./config/db');

db.connect();

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log('Path: ', __dirname);

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
