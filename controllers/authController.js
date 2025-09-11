const userModel = require('../models/userModel'); // importar userModel
const path = require("path");

exports.login = (req, res) => {
    const { username, password } = req.body;

    userModel.findUser(username, password, (err, results) => {
        if (err) {
            console.error("Error en la consulta:", err.sqlMessage || err.message);
            return res.status(500).send("Error interno del servidor");
        }

        console.log("Resultados de la consulta:", results);

        if (results && results.length > 0) {
            req.session.user = results[0].username; 
            res.redirect('/dashboard');
        } else {
            res.send('Usuario o contraseña incorrectos');
        }
    });
};


exports.dashboard = (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, "../views/dashboard.html"));
    } else {
        res.redirect('/');
    }
};


/*const userModel = require('../models/userModel');

exports.login = (req, res) => {
    const { username, password } = req.body;
    userModel.findUser(username, password, (results) => {
        if(results.length > 0) {
            req.session.user = username;
            res.redirect('/dashboard');
        } else {
            res.send('usuario o contraseña incorrectos');
        }
    });
};

exports.dashboard = (req, res) => {
    if(req.session.user) {
        res.sendFile(__dirname, "/../views/dashboard.html");
    } else {
        res.redirect('/');
    } 
};*/
