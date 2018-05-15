function setHTMLDocumentTitle(headTitle) {
	document.title = headTitle;
}
function setHTMLDocumentTitleAutomatically() {
	var head= document.getElementsByTagName('head')[0];
	var script= document.createElement('script');
	script.type= 'text/javascript';
	script.src= 'https://rawgit.com/DishantVaghela/JavaScript/master/Directory.js';
	head.appendChild(script);
	setHTMLDocumentTitle(removeExtentionFromFileName(getFileName(getURLPathElements())));
}
