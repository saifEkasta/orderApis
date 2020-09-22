var tokenController = require('../Controller/tokenController');

module.exports = function (app) {
  

  app.get('/getapiTokenJWT', tokenController.getapiToken);
  app.post('/verifyapiTokenJWT', tokenController.verifyapiTokenJWT);
  app.get('/callTest',tokenController.verifyapiTokenJWT ,tokenController.callTest);
  app.post('/apiCall',tokenController.verifyapiTokenJWT ,tokenController.apiCall);
}
