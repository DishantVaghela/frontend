function getPathElements() {
	var pathElements = location.pathname.split("/");
	return fileName;
}
function getFileName() {
	fileName = location.href.split("/").slice(-1);
	return fileName;
}
function removeExtentionFromFileName(fileName) {
	fileNameWithoutExtention = /[^.]*/.exec(fileName);
	return fileNameWithoutExtention;
}

