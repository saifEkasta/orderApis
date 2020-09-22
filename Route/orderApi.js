 
var OrderController = require('../Controller/OrderController');    
var orderRoute = require('./orderRoute');       

module.exports = function(app){	

	// app.use('/orders',orderRoute)/;
	app.post('/makeOrder',OrderController.makeOrder); 

	app.post('/createCatalog',OrderController.createCatalog);
	app.post('/sendOrder',OrderController.sendOrder);
	app.post('/syncInventory',OrderController.syncInventory);

}