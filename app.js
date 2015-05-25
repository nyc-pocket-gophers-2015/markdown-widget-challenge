//models
var rawText = {}
rawText.text = ""

function formatHeader(text) {
  if(text[0] == "#") {
    headerArray = ["h1", "h2", "h3", "h4","h5","h6"];
    index = text.match(/^#*/)[0].length - 1;
    console.log(index)
    text = text.replace(text.match(/^#*/)[0],"");
    return "<" + headerArray[index] + ">" + text + "</" + headerArray[index] + ">";
  }
}

function checkHeader(text) {
  if(text[0] == "#") return true;
  else return false;
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
    else formattedText += text + "<br>"

  });
  return formattedText
}

//runner
document.addEventListener("keyup", displayPreview);
