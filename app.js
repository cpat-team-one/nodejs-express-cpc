const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Garage update techton plz");
});
 
module.exports.app = app;
