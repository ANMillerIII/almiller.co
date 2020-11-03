// Heading typeWriter effect

var i = 0;
var speed = 80;
var textToWrite = {
	'name': 'Al Miller III',
	"subtitle": 'Software engineer passionate about holistic sustainability.'
};
var key;
var value;

setTimeout(function () {
	speed = 25;
	i = 0;
	key = 'subtitle';
	value = textToWrite[key];
	typeWriter();
}, 11500);

function typeWriter() {
	if (i < value.length) {
		document.getElementById(key).innerHTML += value.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}