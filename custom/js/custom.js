$(document).ready(function () {
  function init () {
    var href, $lastLink;

    $("a.toggle-search").remove();

    $lastLink = $(".custom-link:last");
    href = $lastLink.prop("href");
    href = "https://ed-era.com/books/" + "ukrainian";
    $lastLink.prop("href", href);
    /* Question after topic */
    $(document).on('click', 'button.show', function(){
      $( this ).parent().find("p.quiz-question-explanation").removeClass( "hide" );
    });
    $(document).on('click', 'button.hide', function(){
      $( this ).parent().find("p.quiz-question-explanation").addClass( "hide" );
    });
    /*On each page make social buttons fly from the right*/
    $(".at4-arrow.at-left").click();
  }

  init();
  require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", init);
  });
});
