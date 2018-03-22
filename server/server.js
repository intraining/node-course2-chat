const express = require('express');

const path = require('path');

const publicPath = path.join(__dirname, '../public');

var app = express();

//define port
const port = process.env.PORT || 3000;

//create middleware to serve static pages
//define from where to serve static pages
app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.render('index.html');
//
// });

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});

//method 1 to navigate to a directory
//console.log(__dirname + '/../public');

//better method to navigate to a directory
//console.log(publicPath);
