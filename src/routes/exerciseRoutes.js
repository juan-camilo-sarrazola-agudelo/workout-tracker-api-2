const express = require('express');
const router = express.Router();

let exercises = [ { id: 1, name: 'Push Up', muscle: 'Chest' } ];

router.get('/', (req, res) => {
    const { muscle } = req.query;
    if (muscle) {
        const filtered = exercises.filter(e => e.muscle.toLowerCase() === muscle.toLowerCase());
        return res.status(200).json(filtered);
    }
    res.status(200).json(exercises);
});

router.get('/:id', (req, res) => {
    const exercise = exercises.find(e => e.id == req.params.id);
    if (exercise) res.json(exercise);
    else res.status(404).json({ error: 'Not found' });
});

router.post('/', (req, res) => {
    const newExercise = { id: exercises.length + 1, ...req.body };
    exercises.push(newExercise);
    res.status(201).json({ message: 'Created', data: newExercise });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ message: 'Updated fully' });
});

router.patch('/:id', (req, res) => {
    res.status(200).json({ message: 'Patched' });
});

router.delete('/:id', (req, res) => {
    exercises = exercises.filter(e => e.id != req.params.id);
    res.status(204).send();
});

module.exports = router;