const express = require('express');
const {getAllData,postAllData} = require('./model');
const panchaliroute = express.Router();
panchaliroute.get('/',getAllData);
panchaliroute.post('/',postAllData);
module.exports= panchaliroute;