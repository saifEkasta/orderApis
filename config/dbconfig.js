require('dotenv').config();
var node_env = process.env.MODE;
var con ={};
if(node_env =='DEV'){
    con = {
        HOST: "localhost",
        USER: "ekasta",
        PASSWORD: "beacon5791",
        DB: "posify",
        dialect: "postgres",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      };
      
}


  
  
  module.exports = {
'con':con
};