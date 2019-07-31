const express = require('express');
const router = express.Router();

const pool = require('../database');

//router.get('/', isLoggedIn, async (req, res) => {
 //   const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
  //  res.render('links/list', { links });
//  });

router.get('/users', function(req, res, next) {
 pool.query('select * from usuarios', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});
module.exports = router;