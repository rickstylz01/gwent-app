const express = require('express');
const router = express.Router();
const axios = require('axios');
const gwentOneUrl = 'https://api.gwent.one/?key=data&version=10.12.0'

router.get(`/gwent`, function (req, res) {
  axios.get(gwentOneUrl)
    .then((response) => {
      const cardData = response.data.response;
      const cardValues = Object.values(cardData);
      res.send(cardValues);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
