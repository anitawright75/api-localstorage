// Local storage APIs have the data saved into the storage object using the setItem() method, which takes two params - the name of the key and the value associated with it. 
// the getItem() method is used to retrieve the value
localStorage.setItem('username', 'anita');
localStorage.setItem('answer', 'lola');
localStorage.setItem('color', 'green');
localStorage.setItem('number', 'eight');
// retrieving the HTML elements
var txtUsername = document.getElementById('username'); 
var txtAnswer 	= document.getElementById('answer');
var txtColor 	= document.getElementById('color');
var txtNumber 	= document.getElementById('number');

// calling the elements to be populated by local storage data
txtUsername.value = localStorage.getItem('username');
txtAnswer.value	  = localStorage.getItem('answer');
txtColor.value    = localStorage.getItem('color');
txtNumber.value   = localStorage.getItem('number');

// data saved and event listeners added
txtUsername.addEventListener('input', function(){
	localStorage.setItem('username', txtUsername.value);	
}, false);

txtAnswer.addEventListener('input', function() {
	localStorage.setItem('answer', txtAnswer.value);
}, false);

txtColor.addEventListener('input', function() {
	localStorage.setItem('color', txtColor.value);
}, false);

txtNumber.addEventListener('input', function() {
	localStorage.setItem('number', txtNumber.value);
}, false);
