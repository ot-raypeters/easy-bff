const express = require('express');
const app = express();

const http = require('http').createServer(app);

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

require('./app')(app);

http.listen(9001, () => {
  console.info('EasyBff listening on *:9001');
});
