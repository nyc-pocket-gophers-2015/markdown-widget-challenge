var MarkdownWidget = {
  view: {},
  controller: {},
  linesOfMD: []
}

MarkdownWidget.controller.changeMD = function(text){
  var resultText = text;
  // var resultArray = []
  // resultText.split(" ").forEach(function(ele){
  //   return resultArray.push(MarkdownWidget.controller.markdownTranslate(ele));
  // });
  // resultText = resultArray.join(" ")
  // MarkdownWidget.controller.markdownTranslate(resultText)
  MarkdownWidget.view.showMD(MarkdownWidget.controller.markdownTranslate(resultText));
  resultText = "";
};

MarkdownWidget.controller.markdownTranslate = function(text){
  // newText = ""
  html_content = markdown.toHTML( text );
  // text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  // text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  // text = text.replace(/_(.*?)_/g, "<em>$1</em>");
  // console.log(text);
  return html_content
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
