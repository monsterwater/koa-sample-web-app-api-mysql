/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Routes: www app                                                                             */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

'use strict';

let router = require('koa-router')(); // router middleware for koa

let www = require('./handlers-www.js');


router.get( '/',        www.getIndex);    // render index page
router.get( '/contact', www.getContact);  // render contact page
router.post('/contact', www.postContact); // process contact request

module.exports = router.middleware();

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
