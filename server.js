// Serveur et connexion BDD MySQL
//
// const express = require("express");
// const app = express();
//
// app.get('/', (req, res) => res.send('Hello, World!'))
//
// app.listen(3000, () => {
//     console.log('Serveur en écoute sur le port 3000')
// });

const mysql = require('mysql2');
const con = mysql.createConnection({
    database: "portfoliodatabase",
    host: "localhost",
    user: "jessi",
    password: "evol2sql",
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM realisation_home", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

