'use strict';

(function () {
  var tabs = document.querySelector('.product-details');

  if (tabs) {
    var toggles = tabs.querySelectorAll('.product-details__toggle');
    var togglesArray = [].slice.call(toggles);
    var sections = tabs.querySelectorAll('.product-details__section');
    var sectionsArray = [].slice.call(sections);
    var activeTabIndex = 2;

    var onToggleClick = function (evt) {
      var target = evt.target;
      var isTab = togglesArray.some(function (element) {
        return target === element;
      });
      if (isTab) {
        activeTabIndex = togglesArray.indexOf(target);
        window.sliderColors.switchActiveElement(activeTabIndex, togglesArray, 'product-details__toggle--active');
        window.sliderColors.switchActiveElement(activeTabIndex, sectionsArray, 'product-details__section--active');
      }
    };

    tabs.addEventListener('click', onToggleClick);
  }
})();
