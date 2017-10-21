$(document).ready(function(){
  $("#sticker").sticky({topSpacing:67});
});

if($(window).width() < 990) {
    $("#sticker").unstick();
}

console.log($(window).width());