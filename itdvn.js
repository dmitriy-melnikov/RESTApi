const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const log = console.log;

/*app.all('*', (req, res) => {
    log(req.method);
    log(req.query);
    log(req.protocol);
    log(req.secure);
    log('accepts ',req.accepts(['text/html', 'application/json']));
    log('Content-Type ',req.get('Content-Type'));
    log('____________________');
    res.end();
});*/

app.get('/', (req, res) => {

   /* res.cookie('someCookie', 'this is a cookie', {
        httpOnly: true,
        maxAge: 2000
    });

    res.cookie(`anotherCookie`, 'this is another cookie');

    res.clearCookie('anotherCookie');

    res.sendFile(path.join(__dirname, '/index.html'));*/

   res.locals.prop1 = 'this is res property';
   log(res.locals.prop1);

   res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
   res.append('Warning', '199 Miscellanerus warning');

   res.set('Cache-Controll', 'no-cache');

   res.send(`<h1>Sample Responce</h1><h3>${res.locals.prop1}</h3>`)
});


app.get('/about', (req, res) => {
    log(req.url);
    res.send(`<h1>aboutPage</h1>`);
});
app.get('/products/:productId', (req, res) => {
    log(req.url);
    log(req.params);
    res.send(`<h1>productsPage</h1>`);
});
app.get('/category/:categoryId/product/:productId', (req, res) => {
    log(req.url);
    log(`category: ${req.params['categoryId']}`);
    log(`product: ${req.params['productId']}`);
    res.send(`<h1>productsPage</h1>`);
});

app.get('/[a-zA-Z]*\.html$/', (req, res) => {
    res.send(req.url);
    res.end();
});



app.listen(8080, () => {
    log(`server start on port 8080`);
});