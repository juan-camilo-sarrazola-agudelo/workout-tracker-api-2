const express = require('express');
const router = express.Router();

// Datos simulados (Mock)
let users = [
    { id: 1, name: 'camilo', email: 'camilo@gmail.com' },
    { id: 2, name: 'estiven', email: 'stiven@gmail.com' },
    { id: 3, name: 'vanesa', email: 'vaensa@gmail.com' },
    { id: 4, name: 'juan', email: 'juan@gmail.com' },
];

// GET Listar todos
router.get('/', (req, res) => {
    res.json(users);
});

// GET Uno por ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) res.json(user);
    else res.status(404).send('User not found');
});

// POST Crear usuario
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        ...req.body
    };
    users.push(newUser);
    res.status(201).json({ message: 'User created', data: newUser });
});
// PUT Actualizar completo
router.put('/:id', (req, res) => {
    // Lógica simplificada
    res.status(200).json({ message: `User ${req.params.id} updated completely` });
});

// PATCH Actualizar parcial
router.patch('/:id', (req, res) => {
    res.status(200).json({ message: `User ${req.params.id} patched` });
});

// DELETE Eliminar
router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.status(204).send();
});

// GET con Query String (ej: ?limit=10)
router.get('/', (req, res) => {
    const limit = req.query.limit;
    if(limit) {
        return res.status(200).json(users.slice(0, limit));
    }
    res.status(200).json(users);
});

module.exports = router;