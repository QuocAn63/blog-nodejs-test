const morgan = require('morgan');
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');

const sortMiddleWares = require('./app/middlewares/SortMiddleWare');

const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

db.connect();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(sortMiddleWares);

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a) => a + 1,
            sortable: (field, sort) => {
                const sortBy = field === sort.by ? sort.order : 'default';

                const icons = {
                    default: 'oi oi-elevator',
                    desc: 'oi oi-sort-descending',
                    asc: 'oi oi-sort-ascending',
                };

                const orders = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortBy];
                const order = orders[sort.order];

                return `
                    <a href="?_sort&by=${field}&order=${order}">
                        <span class="${icon}"></span>
                    </a>
                `;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.urlencoded());
app.use(express.json());
console.log('Path: ', __dirname);

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
