let path = require('path');
let express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/main.html'))
    console.log("Hi");
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
