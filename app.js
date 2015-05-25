//models
var rawText = {}
rawText.text = ""
rawText.ul = false;

function formatHeader(text) {
  if(text[0] == "#") {
    var headerArray = ["h1", "h2", "h3", "h4","h5","h6"];
    var headerText = text.match(/^#*/)[0]
    var index = headerText.length - 1;
    text = text.replace(headerText,"");
    return "<" + headerArray[index] + ">" + text + "</" + headerArray[index] + ">";
  }
}

function checkHeader(text) {
  if(text[0] == "#") return true;
  else return false;
}

function formatList(text) {
  var returnedText = ""
  if(rawText.ul == false) {
    returnedText += "<ul>";
    rawText.ul = true;
  }
  text = text.replace("-","")
  returnedText += "<li>" + text + "</li>"
  return returnedText;
}

function checkList(text) {
  if(text.substring(0,2) == "- ") {
    return true;
  } else {
    return false;
  }
}

function checkCloseUl(text) {
  if(checkList(text) == false && rawText.ul == true) {
    rawText.ul = false;
    console.log("stuff")
    return "</ul>"
  } else {
    return ""
  }
}

//views
function displayPreview() {
  document.getElementById("preview_markdown").innerHTML = convertText()
}

//controller
function convertText() {
  var textBox = document.getElementById("md_raw_text")
  var rawText = textBox.value
  var formattedText = ""
  var rawTextArray = rawText.split('\n');
  rawTextArray.forEach(function(text){
    if(checkHeader(text)) formattedText += formatHeader(text);
    else if(checkList(text)) formattedText += formatList(text);
    else formattedText += checkCloseUl(text) + text + "<br>"
  });
  return formattedText
}

//runner
document.addEventListener("keyup", displayPreview);
