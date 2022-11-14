//Timothy Young, Exercise #4(PUG Templates), Full-Stack HW
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5001;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.com/v3.1/all';

// Add your code here
//Using axios to parse data rather than custom function from HW2:
axios.get(url)
    //Parsing country data
    .then(response => {
        countryData = response.data; 
        countryData.sort((a, b) => a.name.common > b.name.common); 
    })
    //Error Handling
    .catch(err => {
        console.error(err);
    });

//Root to draw API into pug template.
app.get('/', (req, res) => {
  // render pug template for the index.html file
  res.render('index', {
    heading: 'Countries of the World',
    main: 'Welcome to this application. Using the REST Countries API, we will be showing the countries and capitals of the world, the most populous countries in the world, and the number of countries in each region of the world',
  });
});

//Capitals Route////////////////////
app.get('/capitals', (req, res) => {
  // map the output array to create an array with country names and capitals
    let countries = [ ];
    for (var i=0; i < countryData.length; i++){
        var country = `${countryData[i].name.common?countryData[i].name.common:'Not found'} - ${countryData[i].capital?countryData[i].capital:'Not found'}`;
        countries.push(country);
    }
    countries.sort();
    // check for empty data in the output array
    if(countries){
    res.render('page', {
    heading: 'Countries and Capitals',
    results: countries,
    })};
});

//Populous Route//////////////////
app.get('/populous', (req, res) => { 
    let populous = [];
   // filter the output array for the countries with population of 50 million or more 
    for (var i=0; i < countryData.length; i++){
        if(countryData[i].population >= 50000000){
            let popObj = {"name": "", "population" : 0};
            popObj.name = countryData[i].name.common;
            popObj.population = countryData[i].population;
            populous.push(popObj);
        }
    }
    // sort the resulting array to show the results in order of population
    let sortPop = populous.sort((a,b) => a.population - b.population);
    let outputPop = [];
    for(var i = 0; i< sortPop.length; i++){
        // map the resulting array into a new array with the country name and formatted population.
        var formattedPop = `${sortPop[i].name} - ${sortPop[i].population.toLocaleString()}`;
        outputPop.push(formattedPop);
    }
    //Reverse the array to show largest populations first.
    outputPop.reverse();
    res.render('page', {
    heading: 'Most Populous Countries',
    results: outputPop,
  });
});

//Regions Route//////////////////////
app.get('/regions', (req, res) => {
    let elements = [];
    // reduce the output array in a resulting object that will feature the numbers of countries in each region
    const countCountries = (arr) =>
        arr.reduce((prev, curr) => 
            ((prev[curr] = ++prev[curr] || 1), prev), {});
    for (var i = 0; i < countryData.length; i++) {
        elements.push(countryData[i].region);
    }
    //Calling count countries before formatting into a new array.
    var result = countCountries(elements);
    let regions = [];
    for (const [key, value] of Object.entries(result)) {
        // disregard empty data from the output array
        if (key !== "") {
            regions.push(`${key}: ${value}`);
        }
    }
    //Rendering the pug template to display the number of countries for each region.
    //Verified using: restcountries.com/v3.1/region/*
    res.render('page', {
        heading: 'Regions of the World',
        results: regions,
    });
});

//Serve the local host to the client:
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
