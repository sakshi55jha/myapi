const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const apiData = require('./data.json')


app.get('/', (req, res) => {
    res.send("Hello I am Live");
  });

app.get('/products', (req, res) => {
    res.send(apiData);
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

