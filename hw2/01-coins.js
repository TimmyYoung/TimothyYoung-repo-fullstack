/** Exercise 01 - Coins **/
const makeString = (dollarAmt,quarters,dimes,nickels,pennies) => {
    var currency = [] 
    if(dollarAmt > 0)
        currency.push(`${dollarAmt} dollars`);
    if(quarters > 0)
        currency.push(`${quarters} quarters`);
    if(dimes > 0)     
        currency.push(`${dimes} dimes`);
    if(nickels > 0)     
        currency.push(`${nickels} nickels`);
    if(pennies > 0)     
        currency.push(`${pennies} pennies`);
    currency = currency.toString();
    /*var currency = (`${dollarAmt} dollars, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`);*/
    return currency
}
const calculateChange = (input) => {  
    // Add your code here
    input = input.toString();
    var parseArray = input.split('.');
    var dollarAmt = parseArray[0];
    if(dollarAmt <= 10){
        var changeAmt = parseArray[1];
        var quarters,dimes,nickels,pennies = 0;
        if(changeAmt >= 25){
            if(changeAmt % 25 == 0)
                quarters = changeAmt;
            else
                quarters = Math.floor(changeAmt/25);
                changeAmt = changeAmt % 25;
                if(changeAmt % 10 == 0)
                    dimes = changeAmt;
                else
                    dimes = Math.floor(changeAmt/10);
                    changeAmt = changeAmt % 10;
                    if(changeAmt % 5 == 0)
                        nickels = changeAmt;
                    else
                        nickels = Math.floor(changeAmt/5);
                        pennies = changeAmt % 5;
        }
        else if(changeAmt >= 10){
            if(changeAmt % 10 == 0)
                    dimes = changeAmt;
            else
                dimes = Math.floor(changeAmt/10);
                changeAmt = changeAmt % 10;
                if(changeAmt % 5 == 0)
                        nickels = changeAmt;
                else
                    nickels = Math.floor(changeAmt/5);
                    pennies = changeAmt % 5;
        }
        else if(changeAmt >= 5){
            if(changeAmt % 5 == 0)
                nickels = changeAmt;
            else
                nickels = Math.floor(changeAmt/5);
                pennies = nickels % 5;
        }
        else
            pennies = changeAmt;
        return makeString(dollarAmt,quarters,dimes,nickels,pennies)
    }
    else
        return "ERROR: Number is larger than $10.";
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
