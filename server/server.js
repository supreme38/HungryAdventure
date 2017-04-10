var express = require('express'),
  path = require('path'),
  dotenv = require('dotenv');
dotenv.config();

const pg = require('./config/database.js');

const app = express();
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
