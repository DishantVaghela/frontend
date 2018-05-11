function setHTMLDocumentTitle(headTitle) {
	document.title.innerHTML = headTitle;
}
function setHTMLDocumentTitleAutomatically() {
	setHTMLDocumentTitle(/[^.]*/.exec(location.pathname.split("/").slice(-1)));
}
