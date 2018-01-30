'use strict';

// let chooseCity = require('./choose-city');
let liQuotes = require('./lib/liquotes/jquery.liQuotes');
let hoverCityLink = require('./hoverCityLink');
let Sticky = require('./lib/sticky/sticky.min.js');
let changeTabs = require('./changeTabs');

const cityList = $('#city-list');
const pageContent = $('.content');
const cityMap = $('.intro__map');
const pageTabs = $('.page-tabs__menu');
const pageTabsContainer = $('.page-tab');

if (pageContent.length > 0) {
  pageContent.liQuotes();
}

if (pageTabs.length > 0) {
  pageTabs.on("click", function (event) {
    event.preventDefault();
    var pageTabsTarget = $(event.target);
    if (pageTabsTarget.get(0).nodeName === 'A') {
       changeTabs(pageTabsTarget,pageTabsContainer);
    }
  })
}


let sticky = new Sticky('.advertising--right');

if (cityMap.length > 0) {
  cityMap.on('mouseover', hoverCityLink);
}

if (cityMap.length > 0) {
  cityMap.on('mouseout', hoverCityLink);
}

