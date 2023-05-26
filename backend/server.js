require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const userRouter = require('./routes/userRouter');
const quizRouter = require('./routes/quizRouter');
const contactRouter = require('./routes/contactRouter');
const scoreRouter = require('./routes/scoreRouter');

// Initialize app
const app = express();

// Use middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRouter);
app.use('/api/quizzes', quizRouter);
app.use('/api/contact', contactRouter);
app.use('/api/score', scoreRouter);

// production build servering
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('GDSC api is running!');
  });
}

// Mongodb connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // listen on app
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on ${process.env.PORT}...`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
