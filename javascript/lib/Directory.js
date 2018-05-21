function getURLPathElements() {
	return location.pathname.split("/");
}
function getFileName() {
	return getURLPathElements().slice(-1);
}
function removeExtentionFromFileName(fileName) {
	return /[^.]*/.exec(fileName);
}

