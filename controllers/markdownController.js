
//  MarkdownWidgetApp.controller.textToMarkdown = function(event) {
//     var input = document.getElementById('source-id').value;
//     var hashCount = hashCounter(input)
//     var starCount = starCounter(input, hashCount)
//     MarkdownWidgetApp.view.previewMarkdown(hashCount, starCount)
//  }


//  function hashCounter(input){
//     var hashCount = 0;
//     for (var i = 0; i < 6; i++){
//       if(input.charAt(i) == '#') {
//         hashCount ++
//       };
//    }
//    return hashCount
//  }


//  function starCounter(input, hashCount){
//    var starCount = 0;
//    console.log(input.charAt(input.length))
//    if((input.charAt(input.length - 1) == '*') && (input.charAt(hashCount) == '*')) {
//      starCount ++
//    }
//    return starCount
//  }

document.addEventListener('DOMContentLoaded', function(event){
  document.getElementById('source-id').addEventListener('keyup', MarkdownWidgetApp.view.previewMarkdown)
})
