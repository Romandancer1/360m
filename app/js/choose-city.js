var cityList = $('#city-list');

if (cityList) {
  cityList.on('click', setCityLink);
  
}

function setCityLink(event) {
  var city = getCity(event);
  $("#button__city").text(city.text);
  $("#city__name").text(city.text);
  $("#city__link").attr('href', city.link);
  $(this).attr("data-dismiss","modal");
}

function getCity(event) {
  event.preventDefault();
  var target = $(event.target);
  var result = null;
  
  if (target.get(0).nodeName === 'A') {
    result = {
      link: target.attr('href'),
      text: target.html()
    }
    
  }
  return result;
}