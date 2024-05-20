const fs = require('fs');
// const http = require('http');
const https = require('https');
const app = require('./app');
const PORT = 8000;
const httpsOptions = {
    key:fs.readFileSync('/admsms/ssl/privkey.pem'),
    cert:fs.readFileSync('/admsms/ssl/fullchain.pem'),
    ca:fs.readFileSync('/admsms/ssl/chain.pem')
    // key:fs.readFileSync('C:/D_copy/Messages/server/src/privkey.pem'),
    // cert:fs.readFileSync('C:/D_copy/Messages/server/src/fullchain.pem'),
    // ca:fs.readFileSync('C:/D_copy/Messages/server/src/chain.pem')

}
const server = https.createServer(httpsOptions,app);
server.listen(PORT,()=>{
    console.log(`your server started at port ${PORT}`);
});
