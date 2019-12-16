'use strict';

(function () {
  var filters = document.querySelector('.catalog__form');

  if (filters) {
    var toggles = filters.querySelectorAll('.filters-group__toggle');
    var togglesArray = [].slice.call(toggles);

    var switchToggle = function (toggle) {
      var group = toggle.parentElement;
      var label = group.querySelector('.filters-group__toggle-label');
      var list = group.querySelector('.filters-group__list');
      if (toggle.checked) {
        group.classList.remove('filters-group--closed');
        label.classList.remove('filters-group__toggle-label--closed');
        if (list) {
          list.classList.remove('visually-hidden');
        }
      } else {
        group.classList.add('filters-group--closed');
        label.classList.add('filters-group__toggle-label--closed');
        if (list) {
          list.classList.add('visually-hidden');
        }
      }
    };

    var onToggleChange = function (evt) {
      switchToggle(evt.target);
    };

    togglesArray.forEach(function (element) {
      element.addEventListener('change', onToggleChange);
    });

    window.addEventListener('load', function () {
      togglesArray.forEach(function (element) {
        switchToggle(element);
      })
    })
  }
})();
