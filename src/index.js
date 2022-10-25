require('dotenv');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// middlewares
//=====================================================
app.use(express.json());

// port
//=====================================================
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
