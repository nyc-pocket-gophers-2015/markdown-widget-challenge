MarkdownWidgetApp.view.previewMarkdown = function() {
  var input = document.getElementById('source-id').value;
  document.getElementById('preview').innerHTML = markdown.toHTML(input)
}


// MarkdownWidgetApp.view.previewMarkdown = function() {
//   var input = document.getElementById('source-id').value;
//   var parsedMarkdown = "<h" + hashCount + ">" + input.replace(/[#|*]/g, '') + "</h" + hashCount + ">";
//   document.getElementById('preview').innerHTML = markdown.toHTML(input)
//   if (starCount == 1) {
//     document.getElementById('preview').innerHTML = "<em>" + parsedMarkdown + "</em>"
//   }
// }
