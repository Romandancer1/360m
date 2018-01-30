
$('#search-results__tours').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".section-aside__table").offset().top
  }, 2000);
});