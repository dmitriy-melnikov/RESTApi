const express = require('express');
const fs = require('fs');

const app = express();

const log = console.log;

const path = 'logger.txt';

app.use((req, res) => {
  const data = `Address: ${req.ip}; Time: ${new Date().toLocaleString()}; URL: ${req.url}\n`;
  fs.appendFile(path, data, (err) => log('data wrote'));
});

app.get('/', (req, res) => {
  log('main handler');
  res.end(`<h1>server running</h1>`);
});
/*app.use('/', (req, res, next) => {
  log('Prehandler...');
  next();
});*/
/*const cookieParser = {
  getCookie: function (req, res, next) {
    const cookies = req.get('Cookie');

    if(cookies) {
      const cookieCollection = cookies.split(';');
      let tempCookies = {};

      for (let i = 0; i < cookieCollection.length; i++) {
        let elem = cookieCollection[i];
        // foo = bar
        let pos = elem.indexOf('=');
        let key, value;

        if (pos !== -1) {
          key = elem.substring(0, pos);
          value = elem.substring(pos + 1);
        }

        tempCookies[key] = decodeURIComponent(value);
      }
      req.cookies = tempCookies;
    }

    next();
  }

};

app.use('/', cookieParser.getCookie);
app.get('/', (req, res) => {
  //log(req.cookies);
  log(req.get('Cookie'));
});

app.get('/index', (req, res) => {
  log('main handler');
  res.cookie('someCookie', 'this is another cookie');
  res.cookie('anotherCookie', 'this is another cookie');
  res.end();
});*/
/*app.get('/', (req, res) => {
  log('main handler');
  res.end(`<h1>server running</h1>`);
});
app.get('/about', (req, res) => {
  log('about handler');
  res.end(`<h1>server running</h1>`);
});*/

app.listen(8080, () => {
  log('server lister on port 8080');
});