const express = require('express');
const router = express.Router();

// Mock Data
let exercises = [
    { id: 1, name: 'Push Up', muscle: 'Chest' },
    { id: 2, name: 'Squat', muscle: 'Legs' }
];

router.get('/', (req, res) => {
    res.json(exercises);
});

router.get('/:id', (req, res) => {
    const exercise = exercises.find(e => e.id == req.params.id);
    if (exercise) res.json(exercise);
    else res.status(404).json({ error: 'Exercise not found' });
});

router.post('/', (req, res) => {
    const newExercise = {
        id: exercises.length + 1,
        name: req.body.name,
        muscle: req.body.muscle
    };
    exercises.push(newExercise);
    res.status(201).json({ message: 'Exercise created', data: newExercise });
});

router.put('/:id', (req, res) => {
    const index = exercises.findIndex(e => e.id == req.params.id);
    if (index !== -1) {
        exercises[index] = { id: parseInt(req.params.id), ...req.body };
        res.status(200).json({ message: 'Exercise updated fully', data: exercises[index] });
    } else {
        res.status(404).json({ error: 'Not found' });
    }
});

router.patch('/:id', (req, res) => {
    const exercise = exercises.find(e => e.id == req.params.id);
    if (exercise) {
        if(req.body.name) exercise.name = req.body.name;
        res.status(200).json({ message: 'Exercise patched', data: exercise });
    } else {
        res.status(404).json({ error: 'Not found' });
    }
});

router.delete('/:id', (req, res) => {
    const initialLength = exercises.length;
    exercises = exercises.filter(e => e.id != req.params.id);
    
    if (exercises.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Not found' });
    }
});

router.get('/', (req, res) => {
    const { muscle } = req.query;
    if (muscle) {
        const filtered = exercises.filter(e => e.muscle.toLowerCase() === muscle.toLowerCase());
        return res.status(200).json(filtered);
    }
    res.status(200).json(exercises);
});

module.exports = router;