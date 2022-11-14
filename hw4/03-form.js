//Timothy Young, Exercise #3(Javascript forms + express), Full-Stack HW
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: true }));

// POST request
app.post('/submit', (req, res) => {
  // Add your code here
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.body.user_name){
        res.write(`<h1> Name: ${req.body.user_name} </h1>`);
    }

    if(req.body.email){
        res.write(`<h1> Email: ${req.body.email} </h1>`);
    }

    if(req.body.comments){
        res.write(`<h1> Comments: ${req.body.comments} </h1>`);
    }

    if(req.body.Newsletter){
        res.write(`<h1> Newsletter: Yes! Sign me up Johnny!! </h1>`);
    }
    else
        {res.write(`<h1> Newsletter: No! Stop the spam empire!! Join the resistance!!! </h1>`);}
    res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
