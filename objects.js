/*
Complete the getValues function. This function should:
- accept one argument, an object
- return an array that contains of each of the values in the object
For example:
getValues({name: "Rob", age: 101}) // returns ["Rob", 101]
*/
function Person(name, age) {
	this.name = name;
	this.age = age;
}
var newPerson = new Person("Rob", 101);

function getValues(obj) {
	var arr = [];
	for (var val in obj) {
		arr.push(obj[val]);
	}
	return arr;
}
getValues(newPerson);


/* ----------------------------------------------------- */
/*
Create a function that takes an object as an argument and then returns an array
that lists all of the keys, and then all of the values. It should look like this:
var user = {
  name: "Zod",
  age: 1000,
}
console.log(keysThenVals(user)); // returns ['name','age','Zod',1000]
*/
function keysThenVals(obj) {
	var arr = [];
	for (val in obj) {
		arr.push(val);
	}
	// var arr = Object.keys(obj);  // another way to put keys into array
	for (val in obj) {
		arr.push(obj[val]);
	}
	return arr;
}
keysThenVals(newPerson);


/* ----------------------------------------------------- */
/*
- Accept two arguments: an object and an array of elements
- Return `true` when all of the elements in the array are keys in the object.
Otherwise return false.
*/
var matchArray = function (obj, arr) {
	var match;
	for (var i=0; i<arr.length; i++) {
		for (var val in obj) {
			if (arr[i] === val) {
				console.log(val + ' ' + arr[i] + ' true');
				match = true;
				break;
			} else {
				console.log(val + ' ' + arr[i] + ' false');
				match = false;
			}
		}
	}
	return match;
}
matchArray(newPerson, objArr);