    const request = require('request');
    const fs = require('fs');
    var Logger = require('../config/logger.js');
    var logger = Logger.logger;

    function writeOrderData(req){
        var result = {status:0,data:'failed'};

        var order = new Promise((resolve, reject) => {
            
            const stream = fs.createWriteStream('./test.txt',{flags:'a'});
        stream.write(JSON.stringify(req.body) +"\r\n ",function(){
            result = {status:1,data:'success'};
            
        return resolve(result);
        })
        });
    return order;
    }



    var makeOrder = async function(req,res){
        
        var result = {status:0,data:'failed'};
        var code = 500;
        var message = 'failed';
        
    var writeOrderResult = await writeOrderData(req);
    if(writeOrderResult.status ==1){
    message='successfull';
    code = 200;
    }
        
    res.writeHead(code, message, {'content-type' : 'application/json'});
    res.end(JSON.stringify(writeOrderResult));

    }

    module.exports = {
        'makeOrder': makeOrder
        
    }