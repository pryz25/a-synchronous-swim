const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  var getRandom = ['left', 'right', 'up', 'down']
  if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(getRandom[Math.floor(Math.random() * 4)]);
    res.end();
  } else {
    res.writeHead(200, headers);
    // res.write(req.data);
    res.end()
  }
};



