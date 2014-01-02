var _m = chrome.i18n.getMessage;

function $(id){
	return document.getElementById(id);
}

function setMsg(id){
	$(id).innerHTML = _m(id);
}

function initI18N(){
	document.title = _m('optionPageTitle') + ' - DNS Flusher for Chrome';
	setMsg('optionName');
	setMsg('optionLabel');
	setMsg('optionDescription');
	setMsg('attentionName');
	setMsg('attentionDescription');
	setMsg('ffOption');
}

function initReloadUI(){
	var el = $('reload-setting'),
		reload = localStorage.getItem('reload');

	el.checked = 'true' === reload;
	el.onclick = function(){
		localStorage.setItem('reload', el.checked);
	}
}

initI18N();
initReloadUI();
