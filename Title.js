function setHTMLDocumentTitle(headTitle) {
	document.title = headTitle;
}
function setHTMLDocumentTitleAutomatically() {
	setHTMLDocumentTitle(removeExtentionFromFileName(getFileName(getURLPathElements())));
}
