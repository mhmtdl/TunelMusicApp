const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/index', (req, res, next) => {
  console.log(req.session.passport.user)
  let admin
  if(req.session.passport.user==process.env.ADMIN_ID){
    admin=true
  }else {
    admin=false
  }
  console.log(admin)
  res.render('index',{admin});
});





module.exports = router;
