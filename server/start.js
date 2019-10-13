const express = require('express');
const app = express();

const http = require('http').createServer(app);

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require('./app2')(app);

// @todo listen to the point when app is 100% ready
http.listen(9001, () => {
  console.info('EasyBff listening on *:9001');
});
