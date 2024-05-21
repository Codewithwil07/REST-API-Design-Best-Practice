const express = require('express');
const workoutController = require('../../controllers/workoutController');

const router = express.Router();

router.get('/', (req, res) => {
  const getAllWorkouts = workoutController.getAllWorkouts();
  return getAllWorkouts;
});

router.get('/:workoutId', (req, res) => {
  res.send('Menerima sebuah keluaran workout');
});

router.post('/', (req, res) => {
  res.send('Membuat sebuah Workout');
});

router.patch('/:workoutId', (req, res) => {
  res.send('Ubah Sebuah Workout');
});

router.delete('/:workoutId', (req, res) => {
  res.send('Hapus Sebuah Workout');
});

module.exports = router;
