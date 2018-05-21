//declare includeScript<scriptname>() functions at the end of the onload event  
var include = document.body.getAttribute("onload");
if(include.search("includeScriptDirectory()") >= 0) {
	includeScript("https://rawgit.com/DishantVaghela/JavaScript/master/Directory.js");
}
if(include.search("includeScriptTitle()") >= 0) {
	includeScript("https://rawgit.com/DishantVaghela/JavaScript/master/Title.js");
}
function includeScript(src) {
	var script   = document.createElement("script");
	script.type  = "text/javascript";
	script.src   = src;    
	document.body.appendChild(script);
}
function includeIcons() {
  includeFontAwesome();
  includeBootstrap();
  includeGoogleIcons();
}
function includeFontAwesome() {
  	link("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
}
function includeBootstrap() {
  	link("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
}
function includeGoogleIcons() {
  	link("https://fonts.googleapis.com/icon?family=Material+Icons");
}
function link (href) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = href;
	document.head.appendChild(link);
}
