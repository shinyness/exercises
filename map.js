/*
Exercise 3
Below are two examples of an invoked function called "map".
For this exercise write out the declaration for this function.
Feel free to research this online.
*/


//______Example invocation 1
map([1, 2, 3], function(value) { // returns [2,3,4]
    return value += 1;
});

//______Example invocation 2
map([1, 2, 3], function(value) { // returns [2,4,6]
    return value *= 2;
});


// declaration for map function
function map(arr, callback) {
	for (var i=0; i<arr.length; i++) {
		arr[i] = callback(arr[i]);
	}
	return arr;
}
