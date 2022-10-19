/** Exercise 04 - API **/

const url = 'https://restcountries.com/v3/all';

// Add your code here
const pullAPI = (url) => {
  //Fetching data from the REST-API:
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((countries) => {
      //Sorting the countries pulled from the REST-API via common name.
      countries.sort((a, b) => a.name.common > b.name.common);
      //Placing the results in a ordered list(ol)
      let ol = document.getElementById("results");
      countries.forEach((country) => {
        //Creating an indexed list from the ordered list(spacing)
        let il = document.createElement("il");
        il.innerText = `${
          //Using the countries common name for the new indexed list entry.
          country.name.common
        } - ${country.population.toLocaleString("en-US")}`;
        //Append this indexed entry to the ordered list.
        ol.appendChild(il);
      });
    })
    //Catching errors to the console for debugging.
    .catch((error) => console.error(error));
};

//Calling the main-function to sort countries from REST-API.
pullAPI(url);
