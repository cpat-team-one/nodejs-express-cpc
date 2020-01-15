const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Garage YOOOOOOOO");
});
 
module.exports.app = app;
