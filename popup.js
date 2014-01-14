document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
});
});