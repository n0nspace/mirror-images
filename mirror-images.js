$(document).ready(function() {

  function buildLayout() {
    //initialise isotope
    const $grid = $('.grid_wrapper').isotope({
      itemSelector: '.grid-item',
      masonry: {
        fitWidth: true
      }
    });

   $('.grid-item').each(function(i){
     setTimeout(function(){
     $('.grid-item').eq(i).addClass('is-visible');
   }, 100 * i);
   });


    $('nav a').on('click', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
      e.preventDefault();
    });

  }

  buildLayout();

  /*TABS*/
  function openTab(attr, tab) {
    var page = $(tab+attr);

    if (page.is(":hidden")) {
      $('.content_wrapper.grid').fadeOut(function() {
         page.fadeIn(800);
         $("#sidebar_button").prop("checked", true);
         page.addClass('active');
      });
    }
  }

  var hash = $.trim(window.location.hash);
  if (hash) {
    openTab('.tab', hash);
  }

  $(".grid-item > a").on('click', function() {
    let attr = $(this).attr('href');
    openTab(attr, '.tab');
  });

  $("#sidebar_controls").on("click", function() {
    if ($(".active").is(":visible")) {
      $(".active").fadeOut(function() {
        $(".content_wrapper.grid").fadeIn();
      });
    }
      else {
        $('#sidebar_button').prop('checked', true);
      }
  });

  /*tooltips*/
  $('.tooltip').tooltipster({
   side: 'right'
});

}); /*document ready*/
