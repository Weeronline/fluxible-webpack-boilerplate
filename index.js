
// Register babel to have ES6 support on the server
require('babel-register');

require('./app/server')((app)=>{
  console.log("Express %s server listening on %s:%s", app.get("env"), app.get("host"), app.get("port"));
  if (app.get("env") === 'development') {
    require('./webpack/server')();
  }
});
