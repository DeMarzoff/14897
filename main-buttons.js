document.addEventListener("DOMContentLoaded", mbInit);
document.addEventListener("load", mbInit);
window.onload = mbInit;

function mbInit() {
	var STORE_SERVERS_DIV = document.getElementsByClassName('store-servers');

	if (STORE_SERVERS_DIV.length > 0) {
		STORE_SERVERS_DIV[0] = onmbClick;
	} else {
		setTimeout(mbInit, 1000);
	}
}

function onmbClick(event) {
	if (event.target.tagName.toLowerCase() == 'a') {
		event.target.parentElement.parentElement.style.display = 'none';
	} else if (event == 'test') {
		return 1;
	}
}