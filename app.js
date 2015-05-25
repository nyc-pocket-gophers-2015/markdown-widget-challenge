// Model

var MarkdownWidget = {};
MarkdownWidget.text = "";

// Controller

MarkdownWidget.converter = function(sourceElem, outputElem) {
  this.text = sourceElem.value;
  this.text
  outputElem.innerHTML = this.text;
};

MarkdownWidget.italic = function(string) {
  var stringArray = string.split(' ')
  stringArray.forEach(element) {
    if (element )
  }
}

// View
document.addEventListener('DOMContentLoaded', function(event){
  var userInput = document.getElementById('user_input')
  var output = document.getElementById('output')
  document.addEventListener('keyup', function(keyUpEvent){
    MarkdownWidget.converter(userInput, output)
  })
});



