var VariantsCount = ($('#mse2_results > .section').length);
$('#filter__count').text(VariantsCount);

$( "#mse2_filters" ).change(function() {
  setTimeout(function(){
    var ChangedCount = ($('#mse2_results > .section').length);
    $('#filter__count').text(ChangedCount).change();
  }, 500);
  
});

$('.search__results-show').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".section-aside--results").offset().top
  }, 2000);
});


