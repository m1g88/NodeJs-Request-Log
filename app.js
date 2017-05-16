var app = require('express')();
var bodyParser = require('body-parser');


// for parsing multipart/form-data
// v1.0.5
var multer = require('multer'); 
var upload = multer(); 

app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('port', (process.env.PORT || 3000));

app.post('/', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

app.get('/test/:param1', function (req, res, next){
  res.json(req.params);
})

app.listen(app.get('port'), function () {
  console.log('listening on port',app.get('port'));
});
