var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema ({
    name : String,
    password : String
});

const UserVar=mongoose.model('UserModel',User);
mongoose.connect('mongodb://localhost:27017/MyDB', function(err, response){  
     console.log( "connected to db"); })

app.use(bodyParser.urlencoded({ extended: true }));

/* app.set('view engine', 'ejs');

app.get('/',function(req,res)
{
    res.render('LoginPage');
});

app.get('/MainPage',function(req,res)
{
    res.render('MainPage');
});
 */
app.post('/MainPage', function(req, res)
{
    // new code should come over here
    UserVar.findOne({name: req.body.name, password: req.body.password}, function(err, user){
     // res.send(req.body);
      console.log(req.body)
    });

});

/* app.get('*', function(req,res)
{
    res.send('Bad Route!');
}); */


app.post("/register",(req,res)=>{
    console.log(req.body);
    var newUser={
        name: req.body.name,
        password: req.body.password
    }
    var user=new UserVar(newUser)
    user.save().then(()=>{
        console.log("New user created")
    })
res.send(req.newUser);
})


var server = app.listen(4000, function() {
    console.log('listening on port 3000.');
});