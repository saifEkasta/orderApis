    const request = require('request');
    const fs = require('fs');
    var Logger = require('../config/logger.js');
    var logger = Logger.logger;

    function writeOrderData(req){
        var result = {status:0,data:'failed'};

        var order = new Promise((resolve, reject) => {
            
            const stream = fs.createWriteStream('./orderCreate.txt',{flags:'a'});
        stream.write(JSON.stringify(req.body) +"\r\n ",function(){
            result = {status:1,data:'success'};
            
        return resolve(result);
        })
        });
    return order;
    }


    
    function writeSendOrderData(req){
        var result = {status:0,data:'failed'};

        var order = new Promise((resolve, reject) => {
            
            const stream = fs.createWriteStream('./sendOrder.txt',{flags:'a'});
        stream.write(JSON.stringify(req.body) +"\r\n ",function(){
            result = {status:1,data:'success'};
            
        return resolve(result);
        })
        });
    return order;
    }

    function writeCatalogData(req){
        var result = {status:0,data:'failed'};

        var order = new Promise((resolve, reject) => {
            
            const stream = fs.createWriteStream('./createCatalog.txt',{flags:'a'});
        stream.write(JSON.stringify(req.body) +"\r\n ",function(){
            result = {status:1,data:'success'};
            
        return resolve(result);
        })
        });
    return order;
    }
    
    function writeSyncInventoryData(req){
        var result = {status:0,data:'failed'};

        var order = new Promise((resolve, reject) => {
            
            const stream = fs.createWriteStream('./syncInventory.txt',{flags:'a'});
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

    var createCatalog = async function(req,res){
        var result = {status:0,data:'failed'};
        var code = 500;
        var message = 'failed';
        
    var writeCatalogResult = await writeCatalogData(req);
    if(writeCatalogResult.status ==1){
    message='successfull';
    code = 200;
    }
        
    res.writeHead(code, message, {'content-type' : 'application/json'});
    res.end(JSON.stringify(writeCatalogResult));

    }


    

    var sendOrder = async function(req,res){

        var result = {status:0,data:'failed'};
        var code = 500;
        var message = 'failed';
        
    var writeSendOrderResult = await writeSendOrderData(req);
    if(writeSendOrderResult.status ==1){
    message='successfull';
    code = 200;
    }
        
    res.writeHead(code, message, {'content-type' : 'application/json'});
    res.end(JSON.stringify(writeSendOrderResult));

    }
    var syncInventory = async function(req,res){

        var result = {status:0,data:'failed'};
        var code = 500;
        var message = 'failed';
        
    var writeSyncInventoryResult = await writeSyncInventoryData(req);
    if(writeSyncInventoryResult.status ==1){
    message='successfull';
    code = 200;
    }
        
    res.writeHead(code, message, {'content-type' : 'application/json'});
    res.end(JSON.stringify(writeSyncInventoryResult));

    }
    
    module.exports = {
        'makeOrder': makeOrder,
        'createCatalog':createCatalog,
        'sendOrder':sendOrder,
        'syncInventory':syncInventory
        
    }