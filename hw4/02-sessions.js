//Timothy Young, Exercise #2(express-session), Full-Stack HW
const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;

// Use the express-session module
//Save uninitialized and resave do not change output for this exercise. Recommended defaults are false. 
app.use(session({secret: "42", saveUninitialized: true, resave: true, store: new session.MemoryStore()}));
//Calling express middleware for static files. Saving the session details staticly via the public folder.
app.use(express.static('public'));
//Calling express middleware for parsing the url data via querystring library.
app.use(express.urlencoded({ extended: false }));

//For some reason I cannot get any display to work for root....
//Works for vscode debugger but not for command line..
app.get('/', (req,res) =>{
    let display  = "Currently on route: " + req.url + "<BR><BR>" + 
        "Welcome to " + req.protocol + "://" + req.get("host") + req.url;
    res.send(display);
    res.end();
    //next();
});

//Display works properly in vscode debugger.
//Must make another request after root to get any output via command line..
app.use('/', (req, res) => {
    if (req.session.routesVisited) {
        let display  = "Currently on route: " + req.url +
        "<BR> <BR> Previously visited: <BR>";
        req.session.routesVisited.forEach(route => {
            display = display.concat("<BR>" + route);  
            });
        req.session.routesVisited.push(req.url);
        res.send(display);
        res.end();
    } 
    else {
        req.session.routesVisited = [];
        let display  = "Currently on route: " + req.url + "<BR><BR>" + 
        "Welcome to " + req.protocol + "://" + req.get("host") + req.url;
        req.session.routesVisited.push('/');
        req.session.routesVisited.push(req.url);
        res.send(display);
        res.end();
  }
});

//Making a post request/response.
app.post('', (req, res) => {
});

//Creating the server from the port given above.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
