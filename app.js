const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(session({
    secret: 'gym-secret-key',
    resave: false,
    saveUninitialized: false
}));

const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.redirect('/login');
};

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    res.locals.title = 'Gym App'; 
    res.locals.cookies = req.cookies;
    next();
});

const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");

app.use("/", registerRoutes);
app.use("/", loginRoutes);

app.use(isAuthenticated);

const homeRoute = require('./routes/home');
const featureRoute = require('./routes/features');
const itemsRoute = require('./routes/items');
const contactRoute = require('./routes/contact');
const aboutRoute = require('./routes/about');
const searchRoute = require('./routes/search');
const cookieRoute = require('./routes/cookie');
const submissionRoutes = require('./routes/submission');
const dashbordRoute = require('./routes/dashboard');

app.use('/', homeRoute);
app.use('/features', featureRoute);
app.use('/items', itemsRoute);
app.use('/contact', contactRoute);
app.use('/about', aboutRoute);
app.use('/search', searchRoute);
app.use('/cookie', cookieRoute);
app.use(submissionRoutes);
app.use('/', dashbordRoute);

const errorRoute = require('./routes/404');
app.use(errorRoute);

const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/modern_prog_db';

mongoose.connect(dbURI)
.then(() => {
    console.log('MongoDB Connected Successfully');
})
.catch((err) => {
    console.log('MongoDB Connection Error:', err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ http://localhost:${PORT}`);
});