const express = require('express');

//REMOVE
const v1Router = require('./v1/routes');
//ADD
const v1workoutRouter = require('./v1/routes/workoutRoutes');

const app = express();
const port = process.env.PORT || 3000;

// REMOVE 
app.get('/', (req, res) => {
  res.send("<h1>It's Working</h1>");
});

// ADD
app.use('/api/v1', v1Router);

// ADD  
app.use('/api/v1/workouts', v1workoutRouter);


app.listen(port, () => {
  console.log(`Api is listening on port ${port}`);
});
