const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get(`/gwent`, function (req, res) {
  axios.get('https://api.gwent.one/?key=data&version=10.10.1')
    .then((response) => {
      // empty array to hold cards data
      // let cardsArray = [];
      const cardData = response.data;
      // cardData.map((cards) => {
      //   cardsArray.push(cards);
      // });
      // res.render('')
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
