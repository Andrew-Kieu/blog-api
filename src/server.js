require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
