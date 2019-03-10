const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const dequeue = require('./messageQueue').dequeue;

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './water-lg.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  //var getRandom = ['left', 'right', 'up', 'down']
  if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(dequeue());
    res.end();
    
  } else if (req.method === 'POST') {
    res.writeHead(200, headers);
    // res.write();
    res.end(req.data);
  } else {
    res.writeHead(200, headers);
    // res.write(req.data);
    res.end()
  }
};



