function setHTMLDocumentTitle(headTitle) {
	document.title = headTitle;
}
function setHTMLDocumentTitleAutomatically(callback) {
	
  var s = document.createElement( 'script' );
  s.setAttribute( 'src', 'https://rawgit.com/DishantVaghela/JavaScript/master/Directory.js' );
  s.onload=callback;
  document.body.appendChild( s );
	
	
	
	setHTMLDocumentTitle(removeExtentionFromFileName(getFileName(getURLPathElements())));
}
