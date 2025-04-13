const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'c3MQP2E$bu.',
    database: 'condo_management'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

// Ruta para el registro de usuarios
app.post('/register', (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.query('INSERT INTO users (username, password, role, dashboard_data) VALUES (?, ?, ?, ?)',
             [username, hashedPassword, role, JSON.stringify({})],
             (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({ message: 'Database error', error: err });
        } else {
            res.status(201).send({ message: 'User registered successfully' });
        }
    });
});

// Ruta para el login de usuarios
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(401).send({ message: 'User not found' });
        } else {
            const user = results[0];
            if (bcrypt.compareSync(password, user.password)) {
                res.status(200).send({ message: 'Login successful', user: { id: user.id, username: user.username, role: user.role } });
            } else {
                res.status(401).send({ message: 'Incorrect password' });
            }
        }
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
