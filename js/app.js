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
	var randomPhrase = [Math.floor(Math.random()*phrases.length)]
	console.log(randomPhrase);
}

//call functions 
getRandomPhraseAsArray(phrases);


