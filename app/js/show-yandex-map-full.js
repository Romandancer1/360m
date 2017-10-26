var showyandexmap = $('#yandexmap-show');

if (showyandexmap) {
  showyandexmap.on('click', showYandexMap);
}

function showYandexMap(event) {
  event.preventDefault();
  $('#yandexmap').css("z-index","2000 ");
}