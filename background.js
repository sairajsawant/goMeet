chrome.browserAction.onClicked.addListener(function(tab) { findTabAndSetActive() });

function findTabAndSetActive() {
	const googleMeet = "https://meet.google.com";
	chrome.tabs.query({}, function(tabs) {
		console.log(tabs)
		tabs.forEach((tab) => {
			if(tab.url.startsWith(googleMeet,0)){
	  			console.log(tab.url)
	  			chrome.windows.update(tab.windowId,{focused:true}, function(window) {});
 				chrome.tabs.update(tab.id, {highlighted:true,active:true},function(tab){
 					console.log(tab.url + " is active")
 				});
 				return false;
	  		}
		})
	});
};
