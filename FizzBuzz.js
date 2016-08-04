for (var i = 1; i < 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
       console.log("Buzz");
    }
    else {
        console.log(i);
    }

}

/*
Print out the numbers from 1 - 20. 
For numbers divisible by 3, print out "Fizz".
For numbers divisible by 5, print out "Buzz".
For numbers divisible by both 3 and 5, print out "FizzBuzz" in the console.
Otherwise, just print out the number
*/