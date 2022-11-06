const http = require('http');
const port = process.env.PORT || 5001;
var querystring = require('querystring');

const server = http.createServer((req, res) => {
// http://localhost:5001/form should return a form with input elements for username, email, and submit button
    if (req.url === '/') {
        res.writeHead(302, { 'Location': 'http://localhost:5001/form' });
        res.end();
    }
    
    const formHTML = `<form action="/submit" method="post" id="submission">
        Username: <input name="name" id="name"><br>
        Email: <input name="email" id="email"><br>
        Comments: <input name="comments" id=comments><br>
        Newsletter: <input name="newsletter" type="checkbox" id="accept">
        <input type="submit">
        </form>`; 

    if(req.url === '/form'){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(formHTML);
        res.end();
    }

// http://localhost:5001/submit should return all the data the user entered

    else if(req.url === '/submit' && req.method ==='POST' ){
        res.writeHead(200, { "Content-Type": "text/html" });
        ////////////////////////////////////////////////////////////////////////////////////////////
        //I should be able to parse the data as in exercise #2, but I am missing a step somewhere...
        /*res.write(`<table border="2">`); //Calling for a html table with a fixed border size.
        res.write(`<tr style=vertical-align:top>`); //Tag to allign table via css.
        res.write('<th> Parameter 1 </th>'); //Header for first column of table.
        res.write('<th> Parameter 2 </th>'); //Header for second column of table.
        res.write('</tr>');}// End of table formatting for header. <tr> is a simple table.
        url.searchParams.forEach((value, key) => {
            res.write('<tr>'); //Begin table formatting for table data.
            res.write(`<td> ${key} </td>`); //Table data 1, aka data row #1.
            res.write(`<td> ${value} </td>`); //Table data 2, aka data row #2.
            res.write('</tr>'); //End table data for <tr> type table.
        });
        res.write('</table>'); // End table.
        res.end();*//////////////////////////////////////////////////////////////////////////////

        //This works but I cannot get my comments or the checkmark...
        let body = '';
            req.on ('data', (chunk) => { 
                body += chunk;}
            );
            req.on('end', () =>{
            const response = querystring.parse(body) ;
            const {name, email} = response;
            res.writeHead(200, {'Content-Type': 'text/html' }) ;
            res.write('<h1> Submission Results: <h1>');
            res.write(`<h2>Name: ${name}<h2>`);
            res.write(`<h2>Email: ${email}<h2>`);
            res.end ();
            }); 
    }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
