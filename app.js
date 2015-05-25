// Model

var MarkdownWidget = {};
MarkdownWidget.text = "";

// Controller

MarkdownWidget.converter = function(sourceElem, outputElem) {
  this.text = sourceElem.value;
  outputElem.innerHTML = markdown.toHTML(this.text);
};

// View
document.addEventListener('DOMContentLoaded', function(event){
  var userInput = document.getElementById('user_input')
  var output = document.getElementById('output')
  document.addEventListener('keyup', function(keyUpEvent){
    MarkdownWidget.converter(userInput, output)
  })
});



