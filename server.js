

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');




app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({    //to support URL-encoded bodies
    extended: true
}));

//setting up the static files for hosting
app.use(express.static(__dirname + '/'));

console.log("file initialized");

app.use(connection(mysql,{
    host        : 'localhost',
    user        : 'root',
    password    : 'root',
    database    : 'person'
},'request'));

//Routing
//this is routing but to connect the rest API with our database
app.get( "/service/person",function(req, res, next){
    //arrays to store dynamic parameters
    var ids =[];

    var query = "SELECT * FROM person";
    req.getConnection(function(err, connection){
        if(err) return next(err);

        connection.query(query, ids, function(err, results){
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);

        });


    });


});
app.get( "/service/person/person_id:id",function(req, res, next){
    //arrays to store dynamic parameters
    var ids =[];
    var person_id=req.params.person_id;
    ids.push(person_id);

    var query = "SELECT * FROM person WHERE person_id = ?";
    req.getConnection(function(err, connection){
        if(err) return next(err);

        connection.query(query, ids, function(err, results){
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);

        });


    });

});


app.get('/index', function(req, res){
    res.redirect('/views/index.html');
});


//End of routing

//launching application on localhost.
app.listen(8180, function(){
    console.log('server loaded on port 8180');

});