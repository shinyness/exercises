/* -------------------------------- */
/* Exercise 1
Modify the code so that it works with only one global variable
*/
function quiz() {
	return function() {
		var answer1 = "blue",
		    answer2 = "no",
		    answer3 = "yes";

		var userAnswer1 = prompt("what color is the sky?")
		if (userAnswer1 === answer1) {
	    alert("Correct")
		} else {
	    alert("Sorry, that was wrong")
		}

		var userAnswer2 = prompt("Do cows fly?")
		if (userAnswer2 === answer2) {
	    alert("Correct")
		} else {
	    alert("Sorry, that was wrong")
		}

		var userAnswer3 = prompt("Do birds fly?")
		if (userAnswer3 === answer3) {
	    alert("Correct")
		} else {
	    alert("Sorry, that was wrong")
		}
	}
}

var startQuiz = quiz();
startQuiz();


/* -------------------------------- */
/* Exercise 2
Write a closure that outputs the next item in the array every time it is invoked.
*/
var nextName = getNames();
    nextName()     // William
    nextName()     // Cindy
    nextName()     // Maureen
    nextName()     // Brenden

function getNames() {
	var names = ["William", "Cindy", "Maureen", "Brenden"];
	var counter = -1;
	return function() {
		return names[counter += 1];
	}
}

var nextName = getNames();
nextName();


/* -------------------------------- */
/* Exercise 3
Write a function that gets the internal data of a function using the sytax below.
getData()();  ///_____Outputs:  "You got the data"
*/
function data(){
	function internal(){
		return 'You got the data';
	}
	return internal;
}

console.log(data()());
