// Serveur et connexion BDD MySQL
const express = require("express");
const app = express()
const mysql = require('mysql2');
const bodyParser = require('body-parser');
require('dotenv').config();

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

app.get('/', function (req, res) {
    console.log(req);
    connection.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'portfoliodatabase'", function (error, result, fields) {
        if (error) throw error;
        res.end(JSON.stringify(result));
    });
});
