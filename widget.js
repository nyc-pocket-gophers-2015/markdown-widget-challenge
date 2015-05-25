var MarkdownWidget = {
  view: {},
  controller: {},
  linesOfMD: []
}

MarkdownWidget.controller.changeMD = function(text){
  var resultText = text;
  var resultArray = []
  resultText.split(" ").forEach(function(ele){
    return resultArray.push(MarkdownWidget.controller.markdownTranslate(ele));
  });
  resultText = resultArray.join(" ")
  MarkdownWidget.view.showMD(resultText);
  resultText = "";
};

MarkdownWidget.controller.markdownTranslate = function(text){
  // newText = ""
  text = text.replace(/\*(.*?)\*/, "<em>" + text.substring(1,text.length-1) + "</em>");
  text = text.replace(/_(.*?)_/, "<em>" + text.substring(1,text.length-1) + "</em>");
  // text = text.replace(/\*\*(.*?)\*\*/, "<strong>" + text.substring(1,text.length-1) + "</strong>");
  console.log(text);
  return text
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
