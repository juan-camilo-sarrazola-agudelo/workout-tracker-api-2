const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Middlewares base
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Importar rutas
const userRoutes = require('./routes/users.routes'); // Asegúrate que este archivo existe y exporta router

// 3. Usar rutas
app.use('/api/users', userRoutes);

// 4. Ruta base para verificar que el servidor está vivo
app.get('/', (req, res) => {
  res.send('API Workout Tracker funcionando correctamente 🏋️‍♂️');
});

// 5. Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint no encontrado' });
});

// 6. Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});