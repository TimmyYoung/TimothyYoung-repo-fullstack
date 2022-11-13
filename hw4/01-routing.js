const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const routes = [
  'welcome',
  'redirect',
  'redirected',
  'cache',
  'cookie',
  'other',
];

let getRoutes = () => {
  let result = '';

  routes.forEach(
    (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
  );

  return result;
};

app.get('/', (req, res) => {
  let routeResults = getRoutes();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Exercise 04</h1>`);
  res.write(`<ul> ${routeResults} </ul>`);
  res.end();
});


//Add your code here
let options = {maxAge : "1d"}
//welcome
app.get('/welcome', (req, res) => {
  res.status(200);
  res.set({'Content-Type': 'text/html'});
  res.send('Greetings Earthlings(welcome)');
});
//redirect
app.get('/redirect', (req,res) => {
  res.redirect(302, 'http://localhost:5001/redirected');
});
//redirected
app.get('/redirected', (req,res) => {
  res.status(302);
  res.set({'Content-Type': 'text/html'});
  res.send('Redirected!!!!');
});
//cache-control
app.get('/cache', (req,res) => {
  //Can write multiple header lines with writeHead() vs set()
  res.writeHead(200, { 'Content-Type': 'text/plain', 'Cache-Control':'max-age = 86400'}); 
  res.write('Setting max age to a day in units of seconds(86400)'); 
  res.end();
});
//cookies
app.get('/cookie', (req,res) => {
  res.status(200);
  res.cookie('hello=world', '1', { maxAge: 86400, httpOnly: true });
  res.send(`RIP Cookie Monsta(2020)`);
});
//other
app.get('/other', (req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/html'});
  res.write(`<h1>404 Error</h1>`);
  res.end();
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
