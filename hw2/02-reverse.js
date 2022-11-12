/** Exercise 02 - Reverse **/
// Add your code here
<<<<<<< HEAD

// Function to reverse digits of a number
const reverseDigits = (num) => {
  let reversed_num = 0;
  while (num !== 0) {
    const digit = num % 10;
    reversed_num = reversed_num * 10 + digit;
    num = Math.trunc(num / 10);
  }

  return reversed_num;
=======
const reverseNum = (num) =>{
    let num_reversed = parseInt((String(num).split("").reverse("").join("")),10);
    return num_reversed;
>>>>>>> ae276c51625f8f6cc6e776d9c52bbf784f2a2d34
};

let button = document.getElementById("reverse");

<<<<<<< HEAD
// Behavior for reverse submission
// Returns error when input is not a valid number
// Returns reversed number when input is valid
button.onclick = () => {
  const num = document.getElementById("input").value;
  let output = document.getElementById("output");

  if (num.toString().length !== 8) {
    output.style.color = "red";
    output.innerText = "Error: Please input an 8-digit number";
  } else {
    const reversed_num = reverseDigits(num);
    output.style.color = "green";
    output.innerText = `${num} --> ${reversed_num}`;
  }
};
=======
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

>>>>>>> ae276c51625f8f6cc6e776d9c52bbf784f2a2d34
