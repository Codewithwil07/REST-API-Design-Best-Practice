const express = require('express');
const router = express.Router();

const workoutController = require('../../controllers/workoutController')


// GET ALL
router.get('/', workoutController.getAllWorkouts)

// GET BY ID
router.get('/:workoutId', workoutController.getOneWorkout)

//POST A WORKOUT
router.post('/', workoutController.createNewWorkout)

//UPDATE A WORKOUT
router.patch('/workoutId', workoutController.updateAnWorkout)

//DELETE A WORKOUT
router.delete('/:workoutId', workoutController.deleteOneWorkout)

module.exports = router
