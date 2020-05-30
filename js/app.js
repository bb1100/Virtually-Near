// test to see if js is linked
alert ("hello");

// animate rainbow text section on homepage
$('.txt').html(function(i, html) {
    var chars = $.trim(html).split("");
  
    return '<span>' + chars.join('</span><span>') + '</span>';
  });

