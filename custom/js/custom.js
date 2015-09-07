$(document).ready(function () {
    var href;
  
    $("a.toggle-search").remove();
    href = $(".custom-link:last").prop("href");
    //href = "https://ed-era.com/books/" + _.last(href.split("-"));
    href = "http://" + _.last(href.split("-")) + ".ed-era.com";
    $(".custom-link:last").prop("href", href);
});

/* Question after topic */
$(document).on('click', 'button.show', function(){
        $( this ).parent().find("p.quiz-question-explanation").removeClass( "hide" );
});
$(document).on('click', 'button.hide', function(){
        $( this ).parent().find("p.quiz-question-explanation").addClass( "hide" );
});
