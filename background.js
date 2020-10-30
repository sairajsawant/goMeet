var browser = browser || chrome
browser.browserAction.onClicked.addListener(() => { findTabAndSetActive() });
function findTabAndSetActive() {
	const googleMeet = "https://meet.google.com";
	browser.tabs.query({}, (tabs) => {
		tabs.forEach((tab) => {
			if(tab.url.startsWith(googleMeet,0)){
				console.log(tab.url)
				browser.windows.update(tab.windowId,{focused:true},() => {});
				browser.tabs.update(tab.id, { highlighted:true,active:true },(tab) => {
					console.log(tab.url + " is active");
				});
				return false;
			}
		})
	});
};
