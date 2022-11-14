//Timothy Young, Exercise #2(express-session), Full-Stack HW
const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;

// Use the express-session module
//Save uninitialized and resave do not change output for this exercise. Recommended defaults are false. 
app.use(session({secret: "42", saveUninitialized: false, resave: false, store: new session.MemoryStore()}));
//Calling express middleware for parsing the url data via querystring library.
app.use(express.urlencoded({ extended: false }));
home = true;

//Fixed the display by using originalURL and session.route.
//Must make another request after root to get any output via command line..
app.get('*', (req, res) => {
    var display;
    if (home) {
        display  = "Currently on route: " + req.originalUrl + "<BR>";
        display += "Welcome to " + req.protocol + " ://" + req.get("host") + req.originalUrl;
        home = false;
        req.session.routesVisited = [];
        req.session.routesVisited.push('/');
    } 
    else {
        display  = "Currently on route: " + req.originalUrl +"<BR> <BR> Previously visited: <BR>";
        req.session.routesVisited.push(req.originalUrl);
    }
    for(urls in req.session.routesVisited){
        display += "<BR>" + req.session.routesVisited[urls];
        }
    res.send(display);
});

//Creating the server from the port given above.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
