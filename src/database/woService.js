const Workout = require('../database/Workout');

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

module.exports = { getAllWorkouts };
