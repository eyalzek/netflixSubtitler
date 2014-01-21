// called when the url of a tab changes
function checkForValidUrl(tabId, changeInfo, tab) {

if (tab.url.indexOf('http://movies.netflix.com') !== -1) {
	chrome.pageAction.show(tabId);
	chrome.tabs.executeScript(null, {"file": "kuku.js"}, function() {
  console.log('Successfully injected script into the page');
});
}
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == 'kaki') {
    	console.log("sent from tab.id=", sender.tab.id);
    }
});

chrome.tabs.onUpdated.addListener(checkForValidUrl);