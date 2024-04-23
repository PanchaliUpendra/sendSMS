const express = require('express');
const cors = require('cors');
const path = require('path');


const panchaliroute = require('./routers/panchaliroute');
const app = express();
const allowedOrigins=[
    'http://localhost:3000',
    'https://lms.ultrasorters.com',
    'https://lmscomaas.netlify.app'
];

app.use(cors({
    origin:allowedOrigins
}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));
app.use('/v1',panchaliroute);

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','index.html'));
});
module.exports = app;