const express = require('express');
// const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

/*
app.engine(
  'hbs',
  handlebars({
    defaultLayout: 'main.hbs',
  })
);
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
*/

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', function(req, res) {
    res.send(200, 'Hello World. :)')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;