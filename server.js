const express = require('express');
const bodyParser = require('body-parser');

const pagesRouter = require('./routes/pages');



const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded( {extended: true}));
app.use('/', pagesRouter);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log("Server running on " + port );
})