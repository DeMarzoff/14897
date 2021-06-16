document.addEventListener("DOMContentLoaded", mbInit);
document.addEventListener("load", mbInit);
window.onload = mbInit;

function mbInit() {
	var STORE_SERVERS_DIV = document.getElementsByClassName('store-servers');

	if (STORE_SERVERS_DIV.length > 0) {
		STORE_SERVERS_DIV[0].onclick = onmbClick;
	} else {
		setTimeout(mbInit, 1000);
	}
}

function onmbClick(event) {
	if (event.target.tagName.toLowerCase() == 'a') {
		STORE_SERVERS_DIV[0].style.display = 'none';
	}
}