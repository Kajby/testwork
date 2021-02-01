menu.onClick = function myFunction() {
	var x = document.getElementById('MyLinks');

	if (x.className === "links") {
		x.className += " responsive";
	}else{
		x.className = "links";
	}
}