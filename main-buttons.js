document.onclick = function(event) {
	if (event.toElement.tagName.toLowerCase() == 'a' && event.toElement?.parentElement?.parentElement?.className.toLowerCase() == 'store-servers') {
		event.toElement.parentElement.parentElement.style.display = 'none';
	}
}