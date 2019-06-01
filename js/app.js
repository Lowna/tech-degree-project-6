var qwerty = document.getElementById('#qwerty');
var phrase = document.getElementById('#phrase');

var missed = 0;
var start = document.querySelector('.btn__reset');

var phrases = [
	'Keep on coding',
	'You got it',
	'Knowledge is power',
	'I need to learn Javascript',
	'I am tired'
];

// click to hide overlay
$(start).on('click', function () {
	$('#overlay').hide();
	var randomPhrase = getRandomPhraseAsArray(phrases);
	addPhraseToDisplay(randomPhrase);

});

//get random phrases
function getRandomPhraseAsArray(arr) {
	//remove decimals from the array selection
	var randomArrIndex = Math.floor(Math.random()*arr.length);
	//select an array from the array random Phrases
	var selectPhrase = arr[randomArrIndex]
	//split the array into a new array of characters
	var splitArr = selectPhrase.split('')
	return(splitArr)
}

//call functions 
getRandomPhraseAsArray(phrases);

//set game display

function addPhraseToDisplay(arr){
	for(var i = 0; i < arr.length; i += 1) {
		var character = document.createElement('li');
		character.innerHTML = arr[i];
		character.classList.add('letter');
		arr[i];
		document.getElementById('phrase').children[0].appendChild(character);
	}	
}

function checkLetter(button) {
	var letters = document.getElementsByClassName('letter');
	var match = null;
	for(var i = 0; i < letters.length; i += 1) {
		if (button.innerHTML == letters[i].innerHTML) {
			letters[i].classList.add('show');
			match = letters[i];
		} 
	}
	return(match); 
}

window.addEventListener("keydown", keysPressed, false);

function keysPressed(e) {
	alert('this works');
}