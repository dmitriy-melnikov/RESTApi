const express = require('express');
const app = express();
const path = require('path');

const catalog = 'data/012_example';

app.use('/', express.static(path.join(__dirname, catalog)));
/*app.get('/', (req, res) => res.sendFile(path.join(__dirname, catalog, 'index.html')));
app.get('/test.js', (req, res) => res.sendFile(path.join(__dirname, catalog, 'test.js')));*/

app.listen(8080, () => console.log('server run'));