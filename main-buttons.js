document.onclick = MBInit;
document.addEventListener("DOMContentLoaded", MBInit);
document.addEventListener("load", MBInit);
function MBInit(event) {
	if (event.toElement.tagName.toLowerCase() == 'a' && event.toElement?.parentElement?.parentElement?.className.toLowerCase() == 'store-servers') {
		event.toElement.parentElement.parentElement.style.display = 'none';
	}
}