module.exports =  function () {

	var orderApi = require('../Route/orderApi.js');
	var jwtRoute = require('../Route/jwtTokenRoute.js');
 
	


   const express = require('express');
   const os = require('os');
   const bodyParser = require('body-parser');
   const app  =  express();
   const session = require('express-session');
   
   
   app.use(session({
	 secret: '343ji43j4n3jn4jk3n',
	  resave: true,
	  saveUninitialized: true
   }))
   var cookieParser = require('cookie-parser');
   app.use(cookieParser());
   
   app.use(express.json()); // for parsing application/json
   app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
   
   
   // Set view engine as EJS
   
   // app.set('view engine', 'ejs');
   app.set('view engine','ejs');		
   app.use('/assets',express.static('assets'));
   app.listen(8091, () => console.log('listening on 8091'));
   
   orderApi(app);
   jwtRoute(app);
	}
   