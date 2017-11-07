// Twilio Credentials
const accountSid = 'AC4305d609ba68cee1ce878ce0a075e142';
const authToken = '29171a6dbca89c29128d78c93f6f38a6';
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));

// var morgan = require('morgan');
// app.use(morgan('dev'));
//changed port for localhost:3000 
app.set('port', (process.env.PORT || 3000));

// app.use('/', function(request, response){
// 	//console.log('this console message works');
// 	 response.send();
// });

app.post('/sms', function(req, res) {

const twiml = new MessagingResponse();

  twiml.message('testing 123');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());

});

app.listen(app.get('port'), function() {
  // console.log('Node app is running on port', app.get('port'));
});