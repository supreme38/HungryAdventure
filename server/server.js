const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const pg = require('./config/database.js');

const app = express();
app.use(cors());
require('./config/routes.js')(app, express);

app.use(express.static(path.join(`${__dirname}/../build`)));
app.use(express.static(path.join(`${__dirname}/../public`)));


app.get('*', (request, response) => {
  response.sendFile(path.resolve(`${__dirname}/../public`, 'index.html'));
});

const server = app.listen(8888, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
