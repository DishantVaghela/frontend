function setHTMLDocumentTitle(headTitle) {
	document.title = headTitle;
}
function setHTMLDocumentTitleAutomatically(callback) {
	var array = ["https://rawgit.com/DishantVaghela/JavaScript/master/Directory.js"];
	var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
            script.onreadystatechange = script.onload = null;
            handler();
        }
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild( script );
    };
    (function run(){
        if(array.length!=0){
            loader(array.shift(), run);
        }else{
            callback && callback();
        }
    })();
	
	
	
	setHTMLDocumentTitle(removeExtentionFromFileName(getFileName(getURLPathElements())));
}
