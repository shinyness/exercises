var arrayOfNumbers = [1,2,3,4,5];

/* -------------------------------- */
/* Each
Write an 'each' function that takes a collection (array or object) and
a callback function.  It is going to loop over every element in the collection and
apply the callback function to it.
When we define the callback function, we create a parameter that will be used to
represent the current element in the array and we can then use that parameter in
the callback function to define what we want to happen.
*/

function each(collection, callback) {
	if (Array.isArray(collection)) {
		for (var i=0; i<collection.length; i++) {
		callback(collection[i]);
		}
	} else {
		for (var prop in collection) {
			callback(collection[prop]);
		}
	}

}
each(arrayOfNumbers, function(number){
	console.log(1 + number);
}); //Logs out every number in the array plus 1


/* -------------------------------- */
/* Map
Write a 'map' function that takes a collection and a callback function.
The callback function returns a new collection.
*/

var arrayOfNumbers = [1,2,3,4,5];

var map = function(collection, callback) {
	var arr = [];

	each(collection, function(number){
		arr.push(callback(number));
	});

	return arr;
}

var arrayPlusThree = map(arrayOfNumbers, function(num){
	return num + 3;
});
console.log(arrayPlusThree); // [4,5,6,7,8]

var arrayPlusFive = map(arrayOfNumbers, function(num){
	return num + 5;
});
console.log(arrayPlusFive); // [6,7,8,9,10]


/* -------------------------------- */
/* Filter
Write a 'filter' function that takes a collection and a callback function.
The callback function returns a new collection and tests to see if the element
belongs in the new collection.
*/

var arrayOfNumbers = [1,2,-4,6,-12,24,2,-9];

var filter = function(collection, callback) {
	var arr = [];

	each(collection, function(number){
		if (callback(number) === true) {
			arr.push(number);
		}
	});

	return arr;
}

var positiveNumbers = filter(arrayOfNumbers, function(num){
	return num > 0;
}); // [1,2,6,24,2]
console.log(positiveNumbers);

/* -------------------------------- */
/* Reduced Number
Write a 'reduce' function that takes a collection and a callback function.
It will return a reduced version of all the numbers in a given collection.
*/

var arrayOfNumbers = [2,5,3,6,5];

var reduce = function(collection, callback) {
	var total;

	each(collection, function(element){
		if (total === undefined) {
			total = element;
		} else {
			total = callback(total, element);
		}
	});
	return total;
};

var reducedNumber = reduce(arrayOfNumbers, function(sum, number){
	return sum + number;
}); // 21
console.log(reducedNumber);

var reducedNumber = reduce(arrayOfNumbers, function(multi, number){
	return multi * number;
}); // 900
console.log(reducedNumber);