const express = require('express');
const router = express.Router();
const axios = require('axios');
const gwentOneUrl = 'https://api.gwent.one/?key=data&version=10.10.1'

router.get(`/gwent`, function (req, res) {
  axios.get(gwentOneUrl)
    .then((response) => {
      const cardsArray = [];
      const cardData = response.data.response;
      cardsArray.push(cardData);
      res.send(cardsArray);
      console.log(cardsArray[0][1]);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
