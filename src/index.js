const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const routes = require('./routes');

const app = express();
const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Debug
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
        app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views'));

// Routes init
routes(app          );

        app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
});
