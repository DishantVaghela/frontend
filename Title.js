function setHTMLDocumentTitle(headTitle) {
	document.title = headTitle;
}
function setHTMLDocumentTitleAutomatically() {
	var script   = document.createElement("script");
	script.type  = "text/javascript";
	script.src   = "https://rawgit.com/DishantVaghela/JavaScript/master/Directory.js";    // use this for linked script
	          // use this for inline script
	document.body.appendChild(script);

	setHTMLDocumentTitle(removeExtentionFromFileName(getFileName(getURLPathElements())));
}
