const app = require('express')();
const http = require('http').createServer(app);
http.listen(9001, () => console.info('Easy bff listening on *:9001'));
