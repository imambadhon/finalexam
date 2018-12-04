var http = require('http');
var express =require("express");
var app = express();
var server= http.Server(app);


var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

var SomeModel = mongoose.model('SomeModel', SomeModelSchema );


app.get('/',function(request,response){
  
  response.SendFile(__dirname+'/view1.html');
  
});

app.get('/HTML',function(request,response){
  
  response.SendFile(__dirname+'/view2.html');
});
app.get('/HTML',function(request,response){
  
  response.SendFile(__dirname+'/view3.html');
});


server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
    console.log('Server running');
  });
  
  db.CreateUser({
      user :"Badhon",
      pwd :"23564",
      role:['readWrite','dbAdmin']
      
  })