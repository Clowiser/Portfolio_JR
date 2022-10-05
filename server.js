// Serveur et connexion BDD MySQL
const express = require("express");
const app = express()
const mysql = require('mysql2');
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.listen(process.env.PORT || 3000, () => {
    console.log('Serveur en écoute sur le port 3000')
});

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Vous êtes connecté à la BDD !")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(cors())

app.get(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/api/realisation_home', function (req, res, next) {
    connection.query("SELECT * FROM portfoliodatabase.realisation_home", function (error, result, fields) {
        if (error) throw error;
        res.end(JSON.stringify(result));
    });
});

app.get('/api/portfolio_web_realisations', function (req, res, next) {
    connection.query("SELECT * FROM portfoliodatabase.portfolio_web_realisations", function (error, result, fields) {
        if (error) throw error;
        res.end(JSON.stringify(result));
    });
});

app.get('/api/portfolio_graphic_digital_creations', function (req, res, next) {
    connection.query("SELECT * FROM portfoliodatabase.portfolio_graphic_digital_creations", function (error, result, fields) {
        if (error) throw error;
        res.end(JSON.stringify(result));
    });
});

app.get('/api/portfolio_graphic_3d', function (req, res, next) {
    connection.query("SELECT * FROM portfoliodatabase.portfolio_graphic_3d", function (error, result, fields) {
        if (error) throw error;
        res.end(JSON.stringify(result));
    });
});