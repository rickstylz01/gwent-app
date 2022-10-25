require('dotenv');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/routes');

// middlewares
//=====================================================
app.use(express.json());

// routes
//=====================================================
app.use(routes);

// port
//=====================================================
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
