

const pool = require('../database/db.js');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM user', (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(results);
    });
};

const addUser = (req, res) => {
    const { name, email, phoneNumber } = req.body;

    if (!name || !email || !phoneNumber) {
        return res.status(400).send({ message: 'All fields are required' });
    }

    pool.query('INSERT INTO user (name, email, phoneNumber) VALUES (?, ?, ?)', [name, email, phoneNumber], (error, results) => {
        if (error) {
            console.error('Error inserting user:', error);
            return res.status(500).send({ message: 'Error booking appointment' });
        }
        res.status(201).json({ id: results.insertId, name, email, phoneNumber });
    });
};

const deleteUser = (req, res) => {
    const userId = req.params.id;

    pool.query('DELETE FROM user WHERE id = ?', [userId], (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    });
};

module.exports = { getUsers, addUser, deleteUser };