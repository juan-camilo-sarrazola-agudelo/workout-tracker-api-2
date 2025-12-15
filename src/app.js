const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares base
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});