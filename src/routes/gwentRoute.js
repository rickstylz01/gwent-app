const express = require('express');
const router = express.Router();
const axios = require('axios');
const gwentOneUrl = 'https://api.gwent.one/?key=data&version=10.10.1'

router.get(`/gwent`, function (req, res) {
  axios.get(gwentOneUrl)
    .then((response) => {
      const cardData = response.data.response;
      const keys = Object.keys(cardData);
      let cardNames = [];
      let cardValues = [];

      // get the keys from the response object
      // keys.forEach((key, index) => {
        // console.log(cardData[key].name);
        // cardNames.push(cardData[key].name);
      // });

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
