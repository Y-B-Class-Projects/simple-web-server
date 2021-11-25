let path = require('path');
let express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/page', function (req, res) {
    //res.sendFile(path.join(__dirname, 'public/main.html'));
    if ((req.query.fname == 'admin' && req.query.lname == 'admin') ||
        (req.query.fname == 'root' && req.query.lname == 'root') ||
        (req.query.fname == 'jct' && req.query.lname == 'jct'))
            res.send("Welcome " + req.query.fname + " " + req.query.lname );
    else
        res.send("Access denied!");
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
