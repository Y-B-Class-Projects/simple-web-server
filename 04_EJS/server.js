let path = require('path');
let express = require('express');
let app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    let drinks = [{ fname: 'Avi', lname: "Levi", id: 123, avg: 100 },
    { fname: 'Moshe', lname: "Levi", id: 234, avg: 90 },
    { fname: 'Avraham', lname: "Cohen", id: 345, avg: 80 },
    { fname: 'Beni', lname: "Beni", id: 456, avg: 98 },
    { fname: 'Baruch', lname: "Lev", id: 567, avg: 52 },
    { fname: 'Yehuda', lname: "", id: 678, avg: 75 },
    { fname: 'Israel', lname: "Israeli", id: 789, avg: 70 },
    { fname: 'Max', lname: "Maxim", id: 890, avg: 80 },
    { fname: 'Itai', lname: "Cohen", id: 901, avg: 50 }

    ];
    res.render('index', { drinks: drinks});
    //res.render('index');
});


app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(80, function () {
    console.log('Listening on port 80!');
});
