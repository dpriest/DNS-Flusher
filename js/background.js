var	bm = chrome.benchmarking,
	tabs = chrome.tabs,
	optUrl = 'dns-flusher-options.html',
	reload = localStorage.getItem('reload');

if(null == reload){ // first install
	localStorage.setItem('reload', true);
	if(undefined == bm){ // benchmarking disabled
		tabs.create({url: optUrl});
	}
};

window.addEventListener('storage', function(ev){
	if('reload' === ev.key) reload = ev.newValue;
}, false);

chrome.browserAction.onClicked.addListener(function(){
	if(undefined == bm){ // benchmarking disabled
		tabs.query({url: 'chrome-extension://*/' + optUrl}, function(tabArr){
			if(tabArr.length > 0){
				tabs.update(tabArr[0].id, {active: true});	
			}else{
				tabs.create({url: optUrl});
			}
		});
		return;
	}
	// benchmarking enabled
	bm.clearHostResolverCache();
	bm.closeConnections();
	if('true' === reload) tabs.reload();
});

document.documentElement.addEventListener("keypress", function(event) {
    if((e.keyCode == 69 || e.keyCode == 101) && e.ctrlKey && e.shiftKey) {
        // do something (step 2, below)
    }
}, true);