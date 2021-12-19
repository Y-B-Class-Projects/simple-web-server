let path = require('path');
let express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(80, function () {
    console.log('Listening on port 80!');
});


app.get('/res', function (req, res) {
    //res.sendFile(path.join(__dirname, 'public/main.html')); 
    res.write("Flower: " + req.query.flowers + ", Amount: " + req.query.amount + ", Packing color: " + req.query.colors + ".");
    res.end();
});   