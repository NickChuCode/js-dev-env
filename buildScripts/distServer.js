import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
  //Hard code for simplicity, pretend this hits a real database
  res.json([
    {"id":1, "firstName":"Bob", "lastName":"Smith", "email": "Bob@gmail.com"},
    {"id":2, "firstName":"Tammy", "lastName":"Norton", "email": "Tammy@yahoo.com"},
    {"id":3, "firstName":"Tina", "lastName":"Lee", "email": "Tina@hotmail.com"}
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
