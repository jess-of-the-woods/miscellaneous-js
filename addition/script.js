window.onload=function(){

	var numOne = document.getElementById("num-one");
	var numTwo = document.getElementById("num-two");
	var addSum = document.getElementById("add-sum");

	numOne.addEventListener("input", add(), true);
	numTwo.addEventListener("input", add(), true);

	function add() {
		var one = parseFloat(numOne.value) || 0;
		var two = parseFloat(numTwo.value) || 0;
		addSum.innerHTML = "your sum is: " + (one + two);
	}
}
/*
- parseFloat turns strings into floating number
- without the " || 0" in the function, the innerHTML method will return NaN if the input box is empty.
*/