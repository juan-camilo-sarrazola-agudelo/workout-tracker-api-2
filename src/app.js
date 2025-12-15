const express = require('express');
const app = express();

app.use(express.json());

const exerciseRoutes = require('./routes/exerciseRoutes');
app.use('/api/exercises', exerciseRoutes);

// Descomenta solo cuando exista userRoutes
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});