function getHTMLFileName() {
	fileName = location.href.split("/").slice(-1);
	return fileName;
}
function removeExtentionFromFileName(fileName) {
	fileNameWithoutExtention = /[^.]*/.exec(fileName)[0];
	return fileNameWithoutExtention;
}

