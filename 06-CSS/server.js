let path = require('path');
let express = require('express');
let app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.listen(80, function () {
    console.log('Listening on port 80!');
});