const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Carlos', email: 'carlos@mail.com' },
    { id: 2, name: 'Ana', email: 'ana@mail.com' }
];

router.get('/', (req, res) => {
    const limit = req.query.limit;
    if(limit) return res.status(200).json(users.slice(0, limit));
    res.status(200).json(users);
});

router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) res.json(user);
    else res.status(404).send('User not found');
});

router.post('/', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json({ message: 'User created', data: newUser });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `User ${req.params.id} updated completely` });
});

router.patch('/:id', (req, res) => {
    res.status(200).json({ message: `User ${req.params.id} patched` });
});

router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.status(204).send();
});

module.exports = router;