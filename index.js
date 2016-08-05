var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = module.exports = express();
var massive = require('massive');
var connString = 'postgres://postgres:craig@localhost/sandbox';
var massiveInstance = massive.connectSync({connectionString: connString});
app.set('db', massiveInstance);
var products = require('./controller.js');
var config = require('./config.js');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/product/:productId', products.getOne);
app.get('/products', products.getAll);
app.post('/product', products.create);
app.put('/product/:productId', products.update);
app.delete('/product/:productId', products.destroy);

var port = config.port;
app.listen(port, function(){
  console.log("Successfully listening on port:", port);
});
