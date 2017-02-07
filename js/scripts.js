$(function() {
  $("h1").click(function() {
  alert("This is a header.");
  });

$(".clickable").click(function() {
  alert("This is a paragraph.");
  });

$(".Look").click(function() {
  alert("This is a description of the picture.");
  });

$("img").click(function() {
  alert("This is an image.");
  });
});

$(function() {
  $(".clickable").click(function() {
    $("#cat-hidden").fadeToggle();
    $("#cat-showing").fadeToggle()
    });
  });



$(function(){
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
});

$(function() {
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
});

$(function() {
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
