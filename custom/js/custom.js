$(document).ready(function () {
    var href;
  
    $("a.toggle-search").remove();
    href = $(".custom-link:last").prop("href");
    //href = "https://ed-era.com/books/" + _.last(href.split("-"));
    href = "http://" + _.last(href.split("-")) + ".ed-era.com";
    $(".custom-link:last").prop("href", href);

    /* Question after topic */
    $("a").click(function(){
        $(".quiz-question-explanation").hide());
        console.log(111);
    });
    $("button.show").click(function(){
        $( this ).parent().find("p.quiz-question-explanation").show();
    });
    $(".hide").click(function(){
        $( this ).parent().find("p.quiz-question-explanation").hide();
        });

});
