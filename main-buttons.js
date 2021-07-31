document.addEventListener("DOMContentLoaded", mbInit);
document.addEventListener("load", mbInit);
window.onload = mbInit;

async function mbInit() {
	var STORE_SERVERS_DIV = document.getElementsByClassName('store-servers');

	if (STORE_SERVERS_DIV.length > 0) {
		STORE_SERVERS_DIV[0].onclick = onmbClick;
	}

	setTimeout(mbInit, 500);
}

function onmbClick(event) {
	if (event.target.tagName.toLowerCase() == 'a') {
		event.toElement.parentElement.parentElement.style.display = 'none';
	}
}