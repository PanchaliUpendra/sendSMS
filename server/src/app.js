const express = require('express');
const cors = require('cors');
const panchaliroute = require('./routers/panchaliroute');
const app = express();
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(express.json());
app.use('/',panchaliroute);
module.exports = app;