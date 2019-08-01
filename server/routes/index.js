const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/signIn', function(req, res, next) {
  res.locals.connection.query('Select * from users where id = '+req.body.usuario+'', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

router.get('/users', function(req, res, next) {
 pool.query('Select * from users where username = '+req.body.usuario+'', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});
module.exports = router;