const express = require('express');

// const v1Router = require('./v1/routes');
const v1woRouter = require('./v1/routes/woRoutes');
const app = express();

// app.use('/api/v1/', v1Router);

app.use('/api/v1/workouts', v1woRouter);

app.listen(4000, () => {
  console.log(`Server berhasil running di port 4000`);
});
