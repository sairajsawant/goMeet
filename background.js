var browser = browser || chrome
browser.browserAction.onClicked.addListener(function(tab) { findTabAndSetActive() });
function findTabAndSetActive() {
	const googleMeet = "https://meet.google.com";
	browser.tabs.query({}, function(tabs) {
		console.log(tabs)
		tabs.forEach((tab) => {
			if(tab.url.startsWith(googleMeet,0)){
	  			console.log(tab.url)
	  			browser.windows.update(tab.windowId,{focused:true}, function(window) {});
 				browser.tabs.update(tab.id, {highlighted:true,active:true},function(tab){
 					console.log(tab.url + " is active")
 				});
 				return false;
	  		}
		})
	});
};
