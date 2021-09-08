const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Je suis un devOps !!! Terminé, chui un goat!!!!!!'));

app.listen(port);
console.log(`App -marche- running on http://localhost:${port}`);
