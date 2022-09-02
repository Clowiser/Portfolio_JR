// Serveur et connexion BDD MySQL
// const express = require("express");
// const app = express();
//
// app.get('/', (req, res) => res.send('Hello, World!'))
//
// app.listen(3000, () => {
//     console.log('Serveur en écoute sur le port 3000')
// });


const mysql = require('mysql2');
// require('dotenv').config();
const con = mysql.createConnection({
    // database: process.env.DB,
    // host: process.env.HOST,
    // user: process.env.USER,
    // password: process.env.PASSWORD,
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM realisation_home", function (err, result, fields) {
        //con.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'portfoliodatabase'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

