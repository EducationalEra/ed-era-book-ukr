$(document).ready(function () {
    var href;
  
    $("a.toggle-search").remove();
    href = $(".custom-link:last").prop("href");
    //href = "https://ed-era.com/books/" + _.last(href.split("-"));
    href = "http://" + _.last(href.split("-")) + ".ed-era.com";
    $(".custom-link:last").prop("href", href);
});


$(document).ready(function(){
    var pook, explanation;
    $(".show").click(function(){
        console.log('press' + this);
        pook = this;
        explanation = pook.siblings("p.quiz-question-explanation");
        explanation.show();
    });
    $(".hide").click(function(){
        explanation = $.get().siblings("p.quiz-question-explanation");
        explanation.hide();
        });
    $(".hide").click(hide());
});

function hide(){
        $(".quiz-question-explanation").hide();
    }

window.onload = hide();