const express = require('express');
const app = express();
const connectDB = require('./config/db');

//Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.json({ msg: 'hello' });
});

// Define the routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});
