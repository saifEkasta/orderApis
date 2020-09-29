 
var OrderController = require('../Controller/OrderController');    
var orderRoute = require('./orderRoute');       

module.exports = function(app){	

	app.use('/orders',orderRoute);
	orderRoute.get('/tes',function(req,res){
		res.send('yes tested');
	})
	orderRoute.post('/makeOrder',OrderController.makeOrder); 
	app.get('/test',OrderController.test);
	orderRoute.post('/createCatalog',OrderController.createCatalog);
	orderRoute.post('/sendOrder',OrderController.sendOrder);
	orderRoute.post('/syncInventory',OrderController.syncInventory);

}