const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Bonjoiur les gars'));

app.listen(port);
console.log(`App -marche- running on http://localhost:${port}`);
