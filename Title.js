function setHTMLDocumentTitle(headTitle) {
	document.title = headTitle;
}
function setHTMLDocumentTitleAutomatically() {
	var scriptElement = document.createElement("script");

	var srcAttribute = document.createAttribute("src");
	srcAttribute.value = "https://rawgit.com/DishantVaghela/JavaScript/master/Directory.js";

	scriptElement.attributes.setNamedItem(srcAttribute);

	document.head.appendChild(scriptElement);
	
	setHTMLDocumentTitle(removeExtentionFromFileName(getFileName(getURLPathElements())));
}
