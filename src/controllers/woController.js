const woService = require('../services/woService');

const getAllWorkouts = (req, res) => {
  const allWorkouts = woService.getAllWorkouts();
  res.send({ status: 'OKE', data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const Workout = woService.getOneWorkout();
  res.send('Get an existing workout');
};

const createNewWorkout = (req, res) => {
  const createNewWorkout = woService.createNewWorkout();
  res.send('Create a new workout');
};

const updateOneWorkout = (req, res) => {
  const updateOneWorkout = woService.updateOneWorkout();
  res.send('Update an existing workout');
};

const deleteOneWorkout = (req, res) => {
  woService.deleteOneWorkout();
  res.send('Delete an existing workout');
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
