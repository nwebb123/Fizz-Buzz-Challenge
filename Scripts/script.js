
document.getElementById("btnLetsFindOut").addEventListener("click", function () {
    //get user data
    let value1 = parseInt(document.getElementById("FizzValue").value);       //parseInt grabs the number out of the parameter and drop anything that's not a number
    let value2 = parseInt(document.getElementById("BuzzValue").value);

    document.getElementById("results").innerHTML = FizzBuzzA(value1, value2);
   
})




function FizzBuzzA(value1, value2) {       //This function is going to return a string so it needs a variable.
    let returnValue = "";       //variable is equal to an empty string. 
    for (let i = 1; i <= 100; i++) {      //Need to create a "for" loop(aka:i). (let i=1; makes it start at zero, then i<=100;i++ tells it to stop once it is less than or equal to 100. but everytime it loops, it adds one to i (i++)
        if (i % value1 == 0 && i % value2 == 0) {                       //Use modulus operator to determine if number is divisible by 3 or 5. (or entry1 entry2). == does not assign a value to something, but compares the values and return true or false. && means "and also". It 
            returnValue += 'FizzBuzz  ';    //We're doing this in a loop, so += (incrementally) will add one iteration of itself (1) until it reaches it's parameters (<=100). if both of those == 0, then the string 'FizzBuzz ' is returned
        }
        else if (i % value1 == 0) {    //else if is saying "if the iteration (1-100) is divisible by value1 and has a remainder of zero, it will evaluate to true and returnValue will return one iteration of itself and evaluate to 'Fizz '
            returnValue += 'Fizz  ';
        }
        else if (i % value2 == 0) {      //else if is saying "if the iteration (1-100)'s is divisible by value2 and has a remainder of zero, it will evaluate to true and returnValue will return one iteration of itself and evaluate to 'Buzz '
            returnValue += 'Buzz  ';
        }
        else {                  //else is taking variable returnValue and adding an instance of itself and equating to loop
            returnValue += i + ' ';
        }
    }

    return returnValue;     //function must have return statement and we are going to return the formatted variable we declared in the beginning (returnValue)
}






