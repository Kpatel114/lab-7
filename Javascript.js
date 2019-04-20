function init(){

	var alertme = document.getElementById('entrybutton');
	var textbox = document.getElementById('entryinput');
	var results = document.getElementById('textoutput');

		console.log(alertme);

		alertme.addEventListener("click", function() {

				alert( "Karan Patel: "+ textbox.value); 
				console.log(textbox);
				results.innerHTML = textbox.value;

			});

}
window.addEventListener('load', init);