function setHTMLHeadTitle(headTitle) {
	document.getElementsByTagName("title")[0].innerHTML = headTitle;
}
function setHTMLHeadTitleAutomatically() {
	fileName = location.pathname.split("/").slice(-1);
	setHTMLHeadTitle(/[^.]*/.exec(fileName));
}
