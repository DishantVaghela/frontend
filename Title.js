function setHTMLDocumentTitle(headTitle) {
	document.title = headTitle;
}
function setHTMLDocumentTitleAutomatically() {
	var my_awesome_script = document.createElement('script');

my_awesome_script.setAttribute('src','https://rawgit.com/DishantVaghela/JavaScript/master/Directory.js');

document.head.appendChild(my_awesome_script);
	
	
	setHTMLDocumentTitle(removeExtentionFromFileName(getFileName(getURLPathElements())));
}
