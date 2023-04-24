var express = require('express');
const van_controlers= require('../controllers/van');
var router = express.Router();

//New code added for Assignment13

// A little function to check if we have an authorized user and continue on 
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

/* GET vans */
router.get('/', van_controlers.van_view_all_Page );
/* GET detail van page */
router.get('/detail',secured, van_controlers.van_view_one_Page);
/* GET create update page */
router.get('/update',secured, van_controlers.van_update_Page);
/* GET create van page */
router.get('/create',secured, van_controlers.van_create_Page);
/* GET delete van page */
router.get('/delete',secured, van_controlers.van_delete_Page);
module.exports = router;

