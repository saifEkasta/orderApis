        const request = require('request');
        const fs = require('fs');
        var Logger = require('../config/logger.js');
        var logger = Logger.logger;
        const db = require("../Models/");
const { con } = require('../config/dbconfig.js');
        const SyncInventory = db.syncInventory;
        const CreateCatalog = db.createCatalog;
        const SendOrders = db.sendOrder;

        const Op = db.Sequelize.Op;
        const Sequelize= db.Sequelize;
        const sequelize= db.sequelize

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
        var dataInsert = {};
        var items = req.body.items;
        
        var insertData = []
        dataInsert.orderId = req.body.id;
        dataInsert.invoice_number = req.body.invoice_number;
        dataInsert.status = req.body.status;
        dataInsert.total = req.body.total;
        dataInsert.order_type = req.body.order_type;
        
        dataInsert.created_on = req.body.created_on;
        dataInsert.outlet_id = req.body.outlet_id;
       
       
        items.forEach((item, index) => {

            dataInsert.itemId = item.item_id;
            dataInsert.itemName = item.name;
            dataInsert.itemPrice = item.price;
            dataInsert.item_is_prepared = item.is_prepared;
            

            item.add_ons.forEach((add_data, indexj) => {
                dataInsert.addonId = add_data.id;
                dataInsert.addonName = add_data.name;
                dataInsert.addonPrice = add_data.price;
              
                insertData.push(dataInsert);
           
           
        })           
      });
       
      var inserted =  SendOrders.bulkCreate(insertData)
      .then(data => {
       result = {status:1,data:'success'};
        return result;
        
       })
       .catch(err => {
           result = {status:0,data:'failed'};
           return result;
       });
      
      
    return inserted;


    }

    function writeCatalogData(req){

     var result = {status:0,data:'failed'};
     var categories = req.body.categories;
     var items = req.body.items;
     var option_groups = req.body.option_groups;
     var options = req.body.options;
     var taxes = req.body.taxes;
     var charges = req.body.charges;
     var inserData = []
     var result = {status:0,data:'faileds'};
    
     categories.forEach((category, index) => {
        items.forEach((item, indexj) => {
            option_groups.forEach((option_group, indexk) => {
             options.forEach((option, indexl) => {
                taxes.forEach((tax, indexm) => {
                    charges.forEach((charge, indexn) => {

         if(index == indexj && index == indexk && index == indexl && index == indexm && index == indexm ){
             var dataInsert = {};
             console.log('in bi luck');
             dataInsert.categoryId = category.id;
             dataInsert.categoryName = category.name;
             dataInsert.categorySortOrder = category.sort_order;
             dataInsert.categorActive = category.active;

             dataInsert.itemId = item.id;
             dataInsert.itemTitle = item.title;
             dataInsert.itemAvailable = item.available;
             dataInsert.itemDescription = item.description;
             dataInsert.itemSortOrder = item.sort_order;
             dataInsert.itemPrice = item.price;
             dataInsert.itemRecommended = item.recommended;
             dataInsert.itemFoodType = item.food_type;
             dataInsert.itemCategoryId = item.category_id;
             dataInsert.itemImgUrl = item.img_url;


             dataInsert.optionGroupId = option_group.id;
             dataInsert.optionGroupTitle = option_group.title;
             dataInsert.optionGroupMinSelect = option_group.min_selectable;
             dataInsert.optionGroupMaxSelect = option_group.max_selectable;
             dataInsert.optionGroupActive = option_group.active;
             dataInsert.optionGroupItemIds = option_group.item_ids;
             dataInsert.optionGroupSortOrder = option_group.sort_order;

             dataInsert.optionId = option.id;
             dataInsert.optionTitle = option.title;
             dataInsert.optionRefTitle = option.ref_title;
             dataInsert.optionDescription = option.description;
             dataInsert.optionWeight = option.weight;
             dataInsert.optionAvailabe = option.available;
             dataInsert.optionPrice = option.price;
             dataInsert.optionSoldAtStore = option.sold_at_store;
             dataInsert.optionSortOrder = option.sort_order;
             dataInsert.optionOptGroupIds = option.opt_group_ids;
             dataInsert.optionFoodType = option.food_type;
            

             dataInsert.taxCode = tax.code;
             dataInsert.taxTitle = tax.title;
             dataInsert.taxDescription = tax.description;
             dataInsert.taxActive = tax.active;
             dataInsert.taxStructureValue = tax.structure.value;
             dataInsert.taxItemIds = tax.item_ids;

             dataInsert.chargesCode = charge.code;
             dataInsert.chargesTitle = charge.title;
             dataInsert.chargesDescription = charge.description;
             dataInsert.chargesActive = charge.active;
             dataInsert.chargesItemIds = charge.item_ids;


             inserData.push(dataInsert);
         }
        
     })    
    })    
   })     
   })    
    })       
   });
 

var inserted =  CreateCatalog.bulkCreate(inserData)
.then(data => {
result = {status:1,data:'success'};
return result;

})
.catch(err => {
 result = {status:0,data:'failed'};
 return result;
});


return inserted;
    }


            async function writeSyncInventoryData(req){
                var items = req.body.items;
                var add_ons = req.body.add_ons;
                var inserData = []
                var result = {status:0,data:'failed'};
               
                items.forEach((item, index) => {

                 add_ons.forEach((add_data, indexj) => {
                    if(index == indexj){
                        var dataInsert = {};
                        dataInsert.itemId = item.id;
                        dataInsert.itemTitle = item.title;
                        dataInsert.itemPrice = item.price;
                        dataInsert.itmeis_disabled = item.is_disabled;
                        dataInsert.addonId = add_data.id;
                        dataInsert.addonTitle = add_data.title;
                        dataInsert.addonPrice = add_data.price;
                        dataInsert.addonis_disabled = add_data.is_disabled;
                        inserData.push(dataInsert);
                    }
                   
                })           
              });
            
           
       var inserted =  SyncInventory.bulkCreate(inserData)
       .then(data => {
        result = {status:1,data:'success'};
         return result;
         
        })
        .catch(err => {
            result = {status:0,data:'failed'};
            return result;
        });
       
       
     return inserted;
     }


        var test  = async function(req, res){
    res.send('dbconfig');
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
        'test':test,
        'syncInventory':syncInventory
        
    }