let path = require('path');
let express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/get', function (req, res) {
    res.write("index.html");
});

app.listen(80, function () {
    console.log('Listening on port 80!');
});