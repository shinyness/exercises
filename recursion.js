/* -------------------------------- */
/*
Example recursion function
*/
function countDown(num) {
	if (num < 0) {
		return "done.";
	}
	console.log(num);
	return countDown(num -= 1);

}
console.log(countDown(10));


/* -------------------------------- */
/*
Write a recursive function that loops through an array and outputs
the index valuesto the console
*/
var tools = ["computer", "books", "text editor"];

function loopThru(arr, count) {
	console.log("arr = " + arr);
	console.log(count);
	if (count === undefined) {
		count = arr.length - 1;
	}
	console.log(arr[count]);
	if (count === 0) {
		return "done."
	}
	return loopThru(arr, count -= 1);
}

loopThru(tools);


/* -------------------------------- */
/* Exercise 1
Take a look at the below function.
For this exercise write out (with pen,paper or digital notepad) the step-by-step
execution flow of the above function until termination. In short you should be able
to write each iteration of the recursion as an English sentence and explain what is
happening.
*/
function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8

/* SOLUTION
On the first iteration: base = 2 and exponent = 3. It will return 2 times power(2, 2).
Our answer so far is: 2 * power(2, 2)
On the second iteration: base = 2 and exponent = 2. It will return 2 times power(2, 1).
Our answer so far is: 2 * 2 * power(2, 1)
On the third iteration: base = 2 and exponent = 1. It will return 2 times power(2, 0).
Our answer so far is: 2 * 2 * 2 * power(2, 0)
On the last iteration: base = 2 and exponent = 0. This will return 1.
Our final answer then is: 2 * 2 * 2 * 1
*/


/* -------------------------------- */
/* Exercise 2
Modify the code in lesson 4.3.1 to loop forward instead of backward.
The goal is to have the console.log() output the items in the array from first-to-last
instead of last-to-first via a recursive loop. You are not allowed to use the
array.reverse() method either.
*/
var tools = ["computer", "books", "text editor"];

function loopThru(arr, counter) {
	
//	console.log("arr = " + arr);
//	console.log(counter);
	
	if (counter === undefined) {
		counter = 0;
	}
	console.log(arr[counter]);
	if (counter === arr.length - 1) {
		return "done."
	}
	return loopThru(arr, counter += 1);
}

loopThru(tools);
