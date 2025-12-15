const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// 1. Middlewares (Necesarios para leer JSON)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Importar Rutas
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');

// 3. Usar las Rutas
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/exercises', exerciseRoutes);

// 4. Ruta base para probar que el servidor vive
app.get('/', (req, res) => {
    res.send('API Workout Tracker funcionando correctamente 🚀');
});

// 5. Manejo de errores 404 (Ruta no encontrada)
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint no encontrado' });
});

// 6. Iniciar Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});