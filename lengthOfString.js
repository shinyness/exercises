/****
Length of String
Write a function that takes a string that is a sentence and contains multiple words.
The function will then determine how many words are in the string and it will also find
the average number of characters each word has (This will not include whitespace).
The function will return a string expressing this information.

The result should look like this:
var sentence = "I am happy you are reading this sentence";
stringTool(sentence) // "This string has 8 words.The average length of each word is 4.125 characters"
*/

var stringTool = function(str) {

	var wordsArray = str.split(" ");
	var numOfWords = wordsArray.length;
	var totalChar = 0;

	for (var i=0; i<wordsArray.length;i++) {
		totalChar = totalChar + wordsArray[i].length;
	}

	aveLength = totalChar / numOfWords;

	return "This string has " + numOfWords + " words.
					The average length of each word is " + aveLength + " characters";

}
