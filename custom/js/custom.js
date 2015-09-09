$(document).ready(function () {
  var href, $lastLink;
  
  $("a.toggle-search").remove();
  
  $lastLink = $(".custom-link:last");
  href = $lastLink.prop("href");
  href = "https://ed-era.com/books/" + "ukrainian";
  $lastLink.prop("href", href);
});

/* Question after topic */
$(document).on('click', 'button.show', function(){
        $( this ).parent().find("p.quiz-question-explanation").removeClass( "hide" );
});
$(document).on('click', 'button.hide', function(){
        $( this ).parent().find("p.quiz-question-explanation").addClass( "hide" );
});
