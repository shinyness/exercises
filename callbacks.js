function each(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
        callback(collection[i]);
    }
}
each([1,2,3,4,5], function(number){
    console.log(1 + number);
}); //Logs out every number in the array plus 1


/* -------------------------------- */
/* Map */

var arrayOfNumbers = [1,2,3,4,5];

var addFive = function(number) {
	return number + 5;
}
var addThree = function(number) {
	return number + 3;
}
var map = function(collection, callback) {
	var arr = [];

	for (var i=0; i<collection.length; i++) {
		arr.push(callback(collection[i]));
	}
		return arr;
}

var arrayPlusFive = map(arrayOfNumbers, addFive);
console.log(arrayPlusFive); // [6,7,8,9,10]

var arrayPlusThree = map(arrayOfNumbers, addThree);
console.log(arrayPlusThree); // [4,5,6,7,8]

/* -------------------------------- */
/* Filter */

var numbers = [1,2,-4,6,-12,24,2,-9];
var getPositive = function(number) {
	return number > 0;
}
var filter = function(collection, callback) {
	var arr = [];
	console.log(collection);
	for (var i=0; i<collection.length; i++) {
		console.log('callback(collection[i]) = ' + callback(collection[i]) + ", collection[i] = " + collection[i] );
		if (callback(collection[i])===true) {
			arr.push(collection[i]);
		}
	}
	return arr;
}

var positiveNumbers = filter(numbers, getPositive); // [1,2,6,24,2]
console.log(positiveNumbers)

/* -------------------------------- */
/* Reduced Number */

var addEmUp = function(sum, number) {
	return sum + number;
};
var multiEmUp = function(multi, number, count) {
	if (multi === 0 && count === 0) {
		multi = 1;
	}
	return multi * number;
};
var reduce = function(collection, callback) {
	var total=0;
	for (var i=0;i<collection.length;i++) {
		// console.log(total);
		total = callback(total, collection[i] ,i);
	}
	return total;
};

var reducedNumber = reduce([2,5,3,6,5], addEmUp); // 21
console.log(reducedNumber);

var reducedNumber = reduce([2,4,7,2], multiEmUp); // 112
console.log(reducedNumber);