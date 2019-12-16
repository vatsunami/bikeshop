'use strict';

(function () {
  var slider = document.querySelector('.slider-view');

  if (slider) {
    var toggles = slider.querySelectorAll('.slider-view__input');
    var togglesArray = [].slice.call(toggles);
    var slides = slider.querySelectorAll('.slider-view__slide');
    var slidesArray = [].slice.call(slides);
    var activeSlideIndex = 0;

    var switchActiveElement = function (activeIndex, elementsArray, activeClass) {
      elementsArray.forEach(function (element) {
        element.classList.remove(activeClass);
      });
      elementsArray[activeIndex].classList.add(activeClass);
    };

    var onToggleChange = function () {
      if (togglesArray.length > 0) {
        var checkedToggle = slider.querySelector('.slider-view__input:checked');
        var checkedToggleIndex = togglesArray.indexOf(checkedToggle);
        if (checkedToggleIndex < slidesArray.length) {
          activeSlideIndex = checkedToggleIndex;
          switchActiveElement(activeSlideIndex, slidesArray, 'slider-view__slide--active');
        }
      }
    };

    togglesArray.forEach(function (element) {
      element.addEventListener('change', onToggleChange);
    });
  }

  window.sliderColors = {
    switchActiveElement: switchActiveElement
  };
})();
