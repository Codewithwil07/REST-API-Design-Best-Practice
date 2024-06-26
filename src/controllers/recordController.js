const recordService = require('../services/recordServices');

const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Can't find workout with id undefined" },
    });
  }
  try {
    const recordWorkout = recordService.getRecordForWorkout(workoutId);
    res.send({ status: 'OK', data: recordWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || 500 } });
  }
};

module.exports = { getRecordForWorkout };
