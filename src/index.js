const express = require('express');

// ** ADD **
const v1WorkoutsRouter = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Its Working</h1>');
});

// ** ADD **
app.use('/api/v1/workouts', v1WorkoutsRouter);

app.listen(PORT, () => {
  console.log('API is listening on port', PORT);
});
