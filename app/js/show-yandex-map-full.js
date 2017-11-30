var showyandexmap = $('#yandexmap-show');
var CloseYandexMap = $('#yandexmap-close');

if (showyandexmap) {
  showyandexmap.on('click', showYandexMap);
}

if (CloseYandexMap) {
  CloseYandexMap.on('click', closeYandexMap);
}

function showYandexMap(event) {
  event.preventDefault();
  $('#yandexmap').css("z-index","2000 ");
  $('#yandexmap-close').addClass("modal-close--yandex-map-show");
  
  if($('*').is($('#promo-picture-man'))){
    $('#promo-picture-man').hide();
  }
}

function closeYandexMap(event) {
  event.preventDefault();
  $('#yandexmap-close').removeClass("modal-close--yandex-map-show");
  $('#yandexmap').css("z-index","-1 ");
  
  if($('*').is($('#promo-picture-man'))){
    $('#promo-picture-man').show();
  }
}

