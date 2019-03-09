//var SwimTeams = require('./swimTeam.js');

setInterval(function() {
  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl, 
    method: 'GET',
    // data: arrowPress,
    success: (data) => {SwimTeam.move(data)},
    error: (resp) => {console.log('Error')}
  })
}, 200);
