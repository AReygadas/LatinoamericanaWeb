const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/SingIn', function(req, res, next) {
 pool.query('SELECT * FROM  `usuarios`  ', function (error, results, fields) {
      
      if(error) throw error;
      res.send(JSON.stringify(results));
    });
});
module.exports = router;