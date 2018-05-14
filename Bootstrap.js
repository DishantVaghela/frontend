
  var linkElement = document.createElement("link");

  var relAttribute = document.createAttribute("rel");
  relAttribute.value = "stylesheet";

  linkElement.attributes.setNamedItem(relAttribute);

  var hrefAttribute = document.createAttribute("href");
  hrefAttribute.value = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

  linkElement.attributes.setNamedItem(hrefAttribute);

  document.head.appendChild(linkElement);

  var scriptElement = document.createElement("script");

  var srcAttribute = document.createAttribute("src");
  srcAttribute.value = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

  scriptElement.attributes.setNamedItem(srcAttribute);

  document.head.appendChild(scriptElement);

  var scriptElement1 = document.createElement("script");

  var srcAttribute1 = document.createAttribute("src");
  srcAttribute1.value = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";

  scriptElement1.attributes.setNamedItem(srcAttribute1);

  document.head.appendChild(scriptElement1);
