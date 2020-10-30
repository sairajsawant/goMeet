var browser = browser || chrome
browser.browserAction.onClicked.addListener(() => { findTabAndSetActive() });
function findTabAndSetActive() {
	const googleMeet = "*://meet.google.com/*";
	browser.tabs.query({url: googleMeet}, (tabs) => {
		tabs.forEach((tab) => {
			console.log(tab.url)
			browser.windows.update(tab.windowId,{focused:true},() => {});
			browser.tabs.update(tab.id, { highlighted:true,active:true },(tab) => {
					console.log(tab.url + " is active");
			});
			return false;
		})
	});
};
