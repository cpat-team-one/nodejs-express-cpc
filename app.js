const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Garage update techton please");
});
 
module.exports.app = app;
