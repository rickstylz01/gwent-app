const express = require('express');
const router = express.Router();
const axios = require('axios');
const gwentOneUrl = 'https://api.gwent.one/?key=data&version=10.10.1'

router.get(`/gwent`, function (req, res) {
  axios.get(gwentOneUrl)
    .then((response) => {
      const cardData = response.data.response;
      res.send(cardData);

      // try to loop through the object
      const keys = Object.keys(cardData);
      console.log(`These are the response keys: ${keys}`);
      console.log(keys);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
