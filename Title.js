function setHeadTitle(headTitle) {
	document.getElementsByTagName("title")[0].innerHTML = headTitle;
}
function setHeadTitleAutomatically() {
	fileName = location.href.split("/").slice(-1);
	fileNameWithoutExtention = /[^.]*/.exec(fileName);
	document.getElementsByTagName("title")[0].innerHTML = fileNameWithoutExtention;
}
