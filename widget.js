var MarkdownWidget = {
  view: {},
  controller: {},
  linesOfMD: []
}

MarkdownWidget.controller.changeMD = function(text){
  var resultText = text;
  // this is where MD will be translated
  MarkdownWidget.view.showMD(resultText);
  resultText = "";
};

MarkdownWidget.view.showMD = function(html){
  document.getElementById('displayMarkdown').innerHTML = html;
};

MarkdownWidget.view.updateNewMD = function(){
  var input = document.getElementById('textMarkdown');
  MarkdownWidget.controller.changeMD(input.value);
};

/* setup */
document.addEventListener('DOMContentLoaded', function(event){
  document.getElementById('textMarkdown').addEventListener('keyup', MarkdownWidget.view.updateNewMD );
});
