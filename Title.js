function setHTMLDocumentTitle(headTitle) {
	document.title = headTitle;
}
function setHTMLDocumentTitleAutomatically() {
	setHTMLDocumentTitle(/[^.]*/.exec(location.pathname.split("/").slice(-1)));
}
