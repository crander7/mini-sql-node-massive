var app = require('./index.js');
var db = app.get('db');

module.exports = {
  create: function(req, res, next) {
    db.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl], function(err, created) {
      res.send('Successfully Added');
    });
  },
  getOne: function(req, res, next) {
    db.read_product([req.params.productId], function(err, product) {
      console.log(req.params.productId);
      res.json(product);
    });
  },
  getAll: function(req, res, next) {
    db.read_products(function(err, products) {
      res.json(products);
    });
  },
  update: function(req, res, next) {
    db.update_product([req.body.name, req.body.description, req.body.price, req.body.imageurl, req.params.productId], function(err, update) {
        res.send('Successfully Updated');
    });
  },
  destroy: function(req, res, next) {
    db.delete_product([req.params.productId], function(err, deleted) {
      res.send('Successfully Deleted');
    });
  }
};
