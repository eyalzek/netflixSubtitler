document.addEventListener('DOMContentLoaded', function () {
	chrome.tabs.getSelected(null,function(tab) {
	var tablink = tab.url;
	var b = decodeURIComponent(tablink);
	b = b.split("&t=")[1];
	b = b.split("+");
	var c = "";
	for (i = 0; i < b.length; i++) {
		c += b[i].match(/\w+/) + " ";
	}
	document.querySelector('.container').innerHTML = c;
});
});