module.exports = (sequelize, Sequelize) => {
    const SyncInventory = sequelize.define("syncInventory", {
      itemId: {
        type: Sequelize.STRING
      },
      itemTitle: {
        type: Sequelize.STRING
      },
      itemPrice: {
        type: Sequelize.FLOAT
      },
      itmeis_disabled: {
        type: Sequelize.BOOLEAN
      },
      addonId: {
        type: Sequelize.STRING
      },
      addonTitle: {
        type: Sequelize.STRING
      },
      addonPrice: {
        type: Sequelize.FLOAT
      },
      addonis_disabled: {
        type: Sequelize.BOOLEAN
      },
      
    });
  
    return SyncInventory;
  };