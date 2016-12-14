'use strict';

const express = require('express'),
      posts = require('./mock/posts.json')

const app = express();

app.get('/', function(req, res){
  res.send("<h1>Hello jesse</h1>")
})

app.get('/blog', function(req, res) {
  res.send(posts)
})

const port = 3000;
app.listen(port, function(){
  console.log('hello from ' + port);
});
