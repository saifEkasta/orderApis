module.exports = (sequelize, Sequelize) => {
    const CreateCatalog = sequelize.define("createCatalog", {
      categoryId: {
        type: Sequelize.STRING
      },
      categoryName: {
        type: Sequelize.STRING
      },
      categorySortOrder: {
        type: Sequelize.INTEGER
      },
      categorActive: {
        type: Sequelize.BOOLEAN
      },

      itemId: {
        type: Sequelize.STRING
      },
      itemTitle: {
        type: Sequelize.STRING
      },
      itemAvailable: {
        type: Sequelize.BOOLEAN
      },
      itemDescription: {
        type: Sequelize.STRING
      },
      itemSortOrder: {
        type: Sequelize.INTEGER
      },
      itemPrice: {
        type: Sequelize.FLOAT
      },
      itemRecommended: {
        type: Sequelize.BOOLEAN
      },
      itemFoodType: {
        type: Sequelize.STRING
      },
      itemCategoryId: {
        type: Sequelize.STRING
      },
      itemImgUrl: {
        type: Sequelize.STRING
      },

      
      optionGroupId: {
        type: Sequelize.STRING
      },
      optionGroupTitle : {
        type: Sequelize.STRING
      },
      optionGroupMinSelect: {
        type: Sequelize.INTEGER
      },
      optionGroupMaxSelect: {
        type: Sequelize.INTEGER
      },
      optionGroupActive: {
        type: Sequelize.BOOLEAN
      },
      optionGroupItemIds: {
        type: Sequelize.STRING
      },
      optionGroupSortOrder: {
        type: Sequelize.INTEGER
      },


      optionId: {
        type: Sequelize.STRING
      },
      optionTitle : {
        type: Sequelize.STRING
      },
      optionRefTitle : {
        type: Sequelize.STRING
      },
      optionDescription: {
        type: Sequelize.STRING
      },
      optionWeight: {
        type: Sequelize.FLOAT
      },
      optionAvailabe: {
        type: Sequelize.BOOLEAN
      },
      optionPrice: {
        type: Sequelize.FLOAT
      },
      optionSoldAtStore: {
        type: Sequelize.BOOLEAN
      },
      optionSortOrder: {
        type: Sequelize.INTEGER
      },
      optionOptGroupIds: {
        type: Sequelize.STRING
      },
      optionFoodType: {
        type: Sequelize.STRING
      },
      

      taxCode:{
        type: Sequelize.STRING
      },
      taxTitle:{
        type: Sequelize.STRING
      },
      taxDescription:{
        type: Sequelize.STRING
      },
      taxActive:{
        type: Sequelize.BOOLEAN
      },
      taxStructureValue:{
        type: Sequelize.STRING
      },
      taxItemIds:{
        type: Sequelize.STRING
      },


      chargesCode:{
        type: Sequelize.STRING
      },
      chargesTitle:{
        type: Sequelize.STRING
      },
      chargesDescription:{
        type: Sequelize.STRING
      },
      chargesActive:{
        type: Sequelize.BOOLEAN
      },
      chargesItemIds:{
        type: Sequelize.STRING
      }



    });
  
    return CreateCatalog;
  };