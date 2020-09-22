
var tokenSecret = require('../config/tokenSecret');
var request = require("request");
const http= require('http');
var jwt = require('jsonwebtoken');



function generateToken(user){

var tokenTo =	jwt.sign({ user }, tokenSecret.jwtSecretKey,{ expiresIn: 10 * 60 });

  if (tokenTo) {
  return {'status':'success','token':tokenTo};
 } else{
  return {'status':'failed','token':'Token can not be signed'};
}

}

var getapiToken = async function getapiToken(req, res){

var token_data='';
var user = tokenSecret.jwtData;
var tokenData= await generateToken(user);
if (tokenData.status =='success') {
res.cookie('cookietoken', tokenData.token);
res.end('tokenIssued');
} else{
	res.end('failed to Inssue token');
}

}
var getapiTokenInter = async function(req, res){

var token_data='';
var user = tokenSecret.jwtData;
var tokenData= await generateToken(user);
if (tokenData.status =='success') {
res.cookie('cookietoken', tokenData.token);
return tokenData.token;
} else{
	return tokenData.token;
}

}


var verifyapiTokenJWT = async function verifyapiTokenJWT(req, res , next){


if (req.cookies) {
 tokenData = req.cookies.cookietoken;

 }
console.log(tokenData);
jwt.verify(tokenData, tokenSecret.jwtSecretKey , function(err, decoded) {
 if (err){
 var responseData = {'status':'failed','message':err};
 res.send(responseData);
 }
if (decoded) {
 // res.send(decoded);
 // next(new Error('thrown from middleware'));
 next();
  }
 });
}

var callTest =  function callTest(req, res){
  console.log(req.cookies.cookietoken);

  console.log('cookietoken');
  res.send('This is just a call ');                                         

}

var apiCall =  function apiCall(req, res) {
	var options = {
		url: 'http://localhost:8042/getapiTokenJWT',
		headers: {"-type" : "application/json"},
		method: 'GET'
	};
	var resD = '';
	resD=  request.get(options, function(error, response, body) {
		console.dir('response => ' + response);
		console.dir('body => ' + body);
		console.dir('response.statusCode => ' + response.statusCode);
		console.dir('error => ' + error);
		resD = body;
		if(!error && response.statusCode == 200){
			
		}else{
			resD = 'Not Found';
		}
		res.send(resD);
	});
	

}




module.exports = {
	
	'apiCall' : apiCall,
	'getapiToken' : getapiToken,
	'callTest' : callTest,
	'getapiTokenInter':getapiTokenInter,
	
	'verifyapiTokenJWT' : verifyapiTokenJWT
	

};