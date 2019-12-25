'use strict';

(function () {
  var tabs = document.querySelector('.product-details');

  if (tabs) {
    var BREAKPOINT_TABLET = 768;
    var RESIZE_INTERVAL = 500;

    var toggles = tabs.querySelectorAll('.product-details__toggle');
    var togglesArray = [].slice.call(toggles);
    var sections = tabs.querySelectorAll('.product-details__section');
    var sectionsArray = [].slice.call(sections);
    var activeTabIndexDefault = 2;
    var activeTabIndexCurrent = 2;

    var onToggleClick = function (evt) {
      var target = evt.target;
      var isTab = togglesArray.some(function (element) {
        return target === element;
      });
      if (isTab) {
        if (window.innerWidth >= BREAKPOINT_TABLET) {
          activeTabIndexCurrent = togglesArray.indexOf(target);
          window.sliderColors.switchActiveElement(activeTabIndexCurrent, togglesArray, 'product-details__toggle--active');
          window.sliderColors.switchActiveElement(activeTabIndexCurrent, sectionsArray, 'product-details__section--active');
        } else {
          checkTabMobile(target);
        }
      }
    };

    var checkTabMobile = function (toggle) {
      var indexOfToggle = togglesArray.indexOf(toggle);
      if (toggle.classList.contains('product-details__toggle--active')) {
        toggle.classList.remove('product-details__toggle--active');
        sectionsArray[indexOfToggle].classList.remove('product-details__section--active');
      } else {
        toggle.classList.add('product-details__toggle--active');
        sectionsArray[indexOfToggle].classList.add('product-details__section--active');
      }
    };

    window.addEventListener('resize', function () {
      var resizeTimeout;
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          if (window.innerWidth >= BREAKPOINT_TABLET) {
            activeTabIndexCurrent = activeTabIndexDefault;
            window.sliderColors.switchActiveElement(activeTabIndexCurrent, togglesArray, 'product-details__toggle--active');
            window.sliderColors.switchActiveElement(activeTabIndexCurrent, sectionsArray, 'product-details__section--active');
          }
        }, RESIZE_INTERVAL);
      }
    });

    tabs.addEventListener('click', onToggleClick);
  }
})();
