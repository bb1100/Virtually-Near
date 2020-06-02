// test to see if js is linked 
alert ("Hello! Click rain video to activate sound!");

// // animate rainbow text section on homepage. https://codepen.io/hendrysadrak/pen/VLMOMJ
// $('.txt').html(function(i, html) {
//     var chars = $.trim(html).split("");
  
//     return '<span>' + chars.join('</span><span>') + '</span>';
//   });

// animation colour text ref 2 
// https://codepen.io/pavlunya/pen/OPmVem
(function(){
  'use strict';
  
  var homeIntroText      = document.getElementsByClassName('intro-text')[0],
      chars  = homeIntroText.textContent.split(''),
      length = chars.length,
      shift  = 360 / length,
      angle  = 0,
      span, t;
  
  homeIntroText.innerHTML = chars.map(function (char) {
    return '<span>' + char + '</span>';
  }).join('');
  
  span = homeIntroText.children;
  
  function frame() {
    for (var i = 0; i < length; i++) {
      span[i].style.color = 'hsl(' + (angle + Math.floor(i * shift)) + ', 60%, 70%)';
    }
    angle++;
  }
  
  t = setInterval(frame, 10);
}());