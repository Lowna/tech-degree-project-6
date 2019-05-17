var qwerty = $('#qwerty');
var phrase = $('#phrase');

var missed = 0;
var start = $('.btn__reset');

var phrases = [
	'Keep on coding',
	'You got it',
	'Knowledge is power',
	'A warm sunny day',
	'I am tired'
];

// click to hide overlay
$(start).on('click', function () {
	$('#overlay').hide();
});

//get random phrases
function getRandomPhraseAsArray(arr) {
	//remove decimals from the array selection
	var randomPhrase = [Math.floor(Math.random()*phrases.length)];
	//select an array from the array random Phrases
	var selectPhrase = arr[randomPhrase]
	//split the array into a new array of characters
	var splitArr = selectPhrase.split('')
	return(splitArr)
}

//call functions 
getRandomPhraseAsArray(phrases);

//set game display

function addPhraseToDisplay(arr){
	var newCharacter = splitArr;
    for (var i =0; i < newCharacter.length; i += 0) {
    	console.log('this kinda works');
    }
}
/*
Create an addPhraseToDisplay function that loops through an array of characters. Inside the loop, for each character in the array, you’ll create a list item, put the character inside of the list item, and append that list item to the #phrase ul in your HTML. If the character in the array is a letter and not a space, the function should add the class “letter” to the list item.
You’ll need to write the addPhraseToDisplay function so that it can take any array of letters and add it to the display. To do that, the function will need to take an array as a parameter:

*/