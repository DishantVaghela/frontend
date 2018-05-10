function setHTMLHeadTitle(headTitle) {
	document.getElementsByTagName("title")[0].innerHTML = headTitle;
}
function setHTMLHeadTitleAutomatically() {
	fileName = location.href.split("/").slice(-1);
	fileNameWithoutExtention = /[^.]*/.exec(fileName);
	setHTMLHeadTitle(fileNameWithoutExtention);
}
