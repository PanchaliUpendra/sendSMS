const fs = require('fs');
// const http = require('http');
const https = require('https');
const app = require('./app');
const PORT = 8000;
const httpsOptions = {
    key:fs.readFileSync('/etc/letsencrypt/live/www.message.ultrasorters.com/privkey.pem'),
    cert:fs.readFileSync('/etc/letsencrypt/live/www.message.ultrasorters.com/cert.pem'),
    ca:fs.readFileSync('/etc/letsencrypt/live/www.message.ultrasorters.com/chain.pem')
}
const server = https.createServer(httpsOptions,app);
server.listen(PORT,()=>{
    console.log(`your server started at port ${PORT}`);
});
