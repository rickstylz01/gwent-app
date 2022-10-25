const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get(`/gwent`, function (req, res) {
  axios.get('https://api.gwent.one/?key=data&version=10.10.1')
    .then((response) => {
      const cardData = response.data;
      console.log(cardData);
    })
});

module.exports = router;
