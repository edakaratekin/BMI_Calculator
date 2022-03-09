const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var result = "";
var age = "";
var h = "";
var w = "";

//send page
app.get("/", function (req, res) {
    res.render('bmi',{
        age : age,
        weight : w,
        height : h,
        result: result});
});

//post bmi result
app.post("/", function (req, res) {
    h = req.body.height;
    w = req.body.weight;
    age = req.body.age;

    var height = parseFloat(h)/100;
    var weight = parseFloat(w);
    console.log(height);
    var bmi = weight / (height * height);
 
    //number to string format
    result = "Your bmi is " + bmi;
    res.render('bmi',{
        age : age,
        weight : w,
        height : h,
        result: result});

});

app.listen(3000, function(){
    console.log("server started on port 3000")
});