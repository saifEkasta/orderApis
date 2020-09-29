const dbconfig = require('../config/dbconfig.js').con; // get connection configurations
const Sequelize = require("sequelize");   // load the module

// Initialize sequilize connection
  const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,



  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle
  }
});


sequelize.sync(); 
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.syncInventory = require("./syncInventory.model.js")(sequelize, Sequelize);
db.createCatalog = require("./createCataloge.model.js")(sequelize, Sequelize);
db.sendOrder = require("./sendOrder.model.js")(sequelize, Sequelize); // model initiated

module.exports = db;