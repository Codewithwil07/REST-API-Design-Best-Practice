const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workout.id);
  if (!workout) {
    return;
  }
  return workout;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workouts) => workouts.name === workouts.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updateWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updateAt: new Date().toLocaleString('en-us', { timeZone: 'UTC' }),
  };
  DB.workouts[indexForUpdate] == updateWorkout;
  saveToDatabasebase(DB);
  return updateWorkout;
};

const deleteOneWorkout = (workoutId) => {
  const indexForDeletion = DB.workouts.findIndex(
    (workout) => workout.id === workout.id
  );

  if (indexForDeletion === -1) {
    return;
  }
  DB.workouts.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

module.exports = { getAllWorkouts, createNewWorkout };
