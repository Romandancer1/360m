module.exports = function hoverCityLink(event) {
  event.preventDefault();
  let target = $(event.target);
  let cityList = $('.city-choose__table');
  
  if (target.get(0).nodeName === 'A') {
    let pointHref = target.data('city');
    cityList.find($('[data-city="'+pointHref+'"]')).toggleClass("city-choose--focused");

  }
}