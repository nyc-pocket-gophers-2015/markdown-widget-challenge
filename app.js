//models
var rawText = {}
rawText.text = ""

//views
function displayPreview() {
  var textBox = document.getElementById("md_raw_text")
  document.getElementById("preview_markdown").innerHTML = textBox.value
}

//controller
function convertText() {}

//runner
document.addEventListener("keyup", displayPreview);
