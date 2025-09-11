const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '5002y',
    database: 'db_clinica'
});

db.connect();

module.exports = {
    findUser: (username, password, callback) => { 
    db.query( 'SELECT * FROM users WHERE username = ? AND password = ?', 
        [username, password], 
        (err, results) => {

            //if(err) throw err;
            //callback(results);
            if(err) {
                return callback(ewrr, null);
            }else
                {
                    callback(null, results);
            }
        }
    );
 }
};

/*
se realizo la siguiente modificacion a la base dedatos:
ALTER USER 'root'@'localhost' 
IDENTIFIED WITH mysql_native_password BY '5002y';
FLUSH PRIVILEGES;


CREATE DATABASE db_clinica; 
USE db_clinica; 
CREATE TABLE users ( 
id INT AUTO_INCREMENT PRIMARY KEY, 
username VARCHAR(50), 
password VARCHAR(50) 
); 
INSERT INTO users (username, password) VALUES ('admin', '1234'); */