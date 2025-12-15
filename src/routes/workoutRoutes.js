const express = require('express');
const router = express.Router();

let workouts = [
    { id: 1, name: 'Full Body', mode: 'Hard', equipment: ['dumbbell'] }
];

router.get('/', (req, res) => {
    const { mode } = req.query;
    if (mode) {
        const filtered = workouts.filter(w => w.mode.toLowerCase() === mode.toLowerCase());
        return res.status(200).json(filtered);
    }
    res.status(200).json(workouts);
});

router.get('/:id', (req, res) => {
    const workout = workouts.find(w => w.id == req.params.id);
    if (workout) res.json(workout);
    else res.status(404).json({ error: 'Not found' });
});

router.post('/', (req, res) => {
    const newWorkout = { id: workouts.length + 1, ...req.body };
    workouts.push(newWorkout);
    res.status(201).json({ message: 'Created', data: newWorkout });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ message: 'Updated fully' });
});

router.patch('/:id', (req, res) => {
    res.status(200).json({ message: 'Updated partially' });
});

router.delete('/:id', (req, res) => {
    workouts = workouts.filter(w => w.id != req.params.id);
    res.status(204).send();
});

module.exports = router;