// Adapted from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

// Get the modal
var aboutModal = document.getElementById("aboutModal");

// Get the button that opens the modal
var modalClick = document.getElementById("modalClick");

// Get the <span> element that closes the modal
var closeModal = document.getElementsByClassName("closeModal")[0];

// When the user clicks the button, open the modal 
modalClick.onclick = function () {
	aboutModal.style.display = "block";
}
// When the user clicks on <closeModal> (x), close the modal
closeModal.onclick = function () {
	aboutModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == aboutModal) {
		aboutModal.style.display = "none";
	}
}