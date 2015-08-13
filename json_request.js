chrome.webRequest.onBeforeSendHeaders.addListener(
	function(details) {
		console.log("Cat intercepted: " + details.requestHeaders);
		details.requestHeaders.push({name:"Accept",value:"application/json"});
		return {requestHeaders: details.requestHeaders};
	},
	{urls: ["*://*.ft.com/__health"]},
	["requestHeaders", "blocking"]
);

