/** Exercise 02 - Reverse **/
// Add your code here
const reverseNum = (num) =>{
    let num_reversed = parseInt((String(num).split("").reverse("").join("")),10);
    return num_reversed;
};

let button = document.getElementById("reverse");

button.onclick = () => {
    const num_in = document.getElementById("input").value;
    let output = document.getElementById("output");

    string_in = num_in.toString();

    if(string_in.length > 8 ){
        output.style.color = "red";
        output.innerText = "Invalid input. Please enter no more than a 8 digit real number";
    }
    else if(string_in.length != 0){
        const num_reversed = reverseNum(num_in);
        output.style.color = "green";
        output.innerText = String(num_in).concat(" --->",String(num_reversed));
    }
};

