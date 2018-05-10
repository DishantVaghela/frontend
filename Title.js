function setHTMLHeadTitle(headTitle) {
	document.getElementsByTagName("title")[0].innerHTML = headTitle;
}
function setHTMLHeadTitleAutomatically() {
	setHTMLHeadTitle(/[^.]*/.exec(location.pathname.split("/").slice(-1)));
}
