$(document).ready(function () {
    var href;
  
    $("a.toggle-search").remove();
    href = $(".custom-link:last").prop("href");
    //href = "https://ed-era.com/books/" + _.last(href.split("-"));
    href = "http://" + _.last(href.split("-")) + ".ed-era.com";
    $(".custom-link:last").prop("href", href);

    /* Question after topic */
    $("a").click((".quiz-question-explanation").hide());
    $("button.show").click(function(){
        $( this ).parent().find("p.quiz-question-explanation").show();
    });
    $(".hide").click(function(){
        $( this ).parent().find("p.quiz-question-explanation").hide();
        });

});
