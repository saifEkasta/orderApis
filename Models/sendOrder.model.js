module.exports = (sequelize, Sequelize) => {
    const SendOrder = sequelize.define("sendOrder", {
      orderId: {
        type: Sequelize.STRING
      },
      invoice_number: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.FLOAT
      },
      created_on: {
        type: Sequelize.STRING
      },
      outlet_id: {
        type: Sequelize.STRING
      },
      itemId: {
        type: Sequelize.STRING
      },
      itemName: {
        type: Sequelize.STRING
      },
      itemPrice: {
        type: Sequelize.STRING
      },
      item_is_prepared: {
        type: Sequelize.BOOLEAN
      },
      addonId: {
        type: Sequelize.STRING
      },
      addonName: {
        type: Sequelize.STRING
      },
      addonPrice: {
        type: Sequelize.FLOAT
      }
      
    });
  
    return SendOrder;
  };