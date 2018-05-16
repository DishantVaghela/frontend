//declare includeScript<scriptname>() functions at the end of the onload event  
var include = document.body.getAttribute("onload");
if(include.search("includeScriptDirectory()") >= 0) {
	includeScript("https://rawgit.com/DishantVaghela/JavaScript/master/Directory.js");
}
function includeScript(src) {
	var script   = document.createElement("script");
	script.type  = "text/javascript";
	script.src   = src;    
	document.body.appendChild(script);
}
function includeFontAwesome() {
  var linkElement = document.createElement("link");

  var relAttribute = document.createAttribute("rel");
  relAttribute.value = "stylesheet";

  linkElement.attributes.setNamedItem(relAttribute);

  var hrefAttribute = document.createAttribute("href");
  hrefAttribute.value = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

  linkElement.attributes.setNamedItem(hrefAttribute);

  document.head.appendChild(linkElement);
}
function includeBootstrap() {
  var linkElement = document.createElement("link");

  var relAttribute = document.createAttribute("rel");
  relAttribute.value = "stylesheet";

  linkElement.attributes.setNamedItem(relAttribute);

  var hrefAttribute = document.createAttribute("href");
  hrefAttribute.value = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

  linkElement.attributes.setNamedItem(hrefAttribute);

  document.head.appendChild(linkElement);
}
function includeGoogleIcons() {
  var linkElement = document.createElement("link");

  var relAttribute = document.createAttribute("rel");
  relAttribute.value = "stylesheet";

  linkElement.attributes.setNamedItem(relAttribute);

  var hrefAttribute = document.createAttribute("href");
  hrefAttribute.value = "https://fonts.googleapis.com/icon?family=Material+Icons";

  linkElement.attributes.setNamedItem(hrefAttribute);

  document.head.appendChild(linkElement);
}
function includeIcons() {
  includeFontAwesome();
  includeBootstrap();
  includeGoogleIcons();
}
function includexyz() {
  var linkElement = document.createElement("link");

  var relAttribute = document.createAttribute("rel");
  relAttribute.value = "stylesheet";

  linkElement.attributes.setNamedItem(relAttribute);

  var hrefAttribute = document.createAttribute("href");
  hrefAttribute.value = "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css";

  linkElement.attributes.setNamedItem(hrefAttribute);

  document.head.appendChild(linkElement);

  var scriptElement = document.createElement("script");

  var srcAttribute = document.createAttribute("src");
  srcAttribute.value = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

  scriptElement.attributes.setNamedItem(srcAttribute);

  document.head.appendChild(scriptElement);

  var scriptElement1 = document.createElement("script");

  var srcAttribute1 = document.createAttribute("src");
  srcAttribute1.value = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js";

  scriptElement1.attributes.setNamedItem(srcAttribute1);

  document.head.appendChild(scriptElement1);
  
  var scriptElement2 = document.createElement("script");

  var srcAttribute2 = document.createAttribute("src");
  srcAttribute2.value = "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js";

  scriptElement2.attributes.setNamedItem(srcAttribute2);

  document.head.appendChild(scriptElement2);
}
