function woo (data, callback) {
	callback(null, data)
}

function addFiftySix(error, data) {
	var x = 56
	data = data + x
	console.log(data)
}

woo( 10, addFiftySix )

// Notes:
// data = data + x
// ^^^^
// SyntaxError: Unexpected identifier
// this error was happening as I didnt have an opening curly brace in my addFiftySix fn.

// how it works
// woo is called, passing in the value 10 & the function to call (addFiftySix) as a callback..
// woo is executed, it takes 2 args, data & a callback. it calls the function which has been provided to it & passes null as 1st arg & data as the 2nd arg
// callback function (addFiftySix) executes & logs out the final value.. thats all! 
