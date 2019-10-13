const express = require('express');
const app = express();

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require('./app2')(app);

// @todo verify listen happens after endpoints are registered
const http = require('http').createServer(app);
http.listen(9001, () => {
  console.info('EasyBff listening on *:9001');
});
