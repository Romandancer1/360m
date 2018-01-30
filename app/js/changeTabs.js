module.exports = function showTabs ( tabLink, tabContainer) {
  event.preventDefault();
  tabLink.parent().addClass("current");
  tabLink.parent().siblings().removeClass("current");
  let tab = tabLink.attr("href");
  tabLink.parent().parent().parent().find($(tabContainer)).not(tab).css("display", "none");
  $(tab).fadeIn();
};