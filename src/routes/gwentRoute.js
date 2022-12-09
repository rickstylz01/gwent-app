const express = require('express');
const router = express.Router();
const axios = require('axios');
const gwentOneUrl = 'https://api.gwent.one/?key=data&version=10.12.0'

router.get(`/gwent`, function (req, res) {
  axios.get(gwentOneUrl)
    .then((response) => {
      const cardData = response.data.response;
      const keys = Object.keys(cardData);
      let cardNames = [];
      let cardValues = [];

      // get the values from the response object
      Object.values(cardData)
        .forEach(
          val => cardValues.push(val)
        );


      res.send(cardValues);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
