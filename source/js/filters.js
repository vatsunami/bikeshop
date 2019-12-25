'use strict';

(function () {
  var catalogMenu = document.querySelector('.catalog__menu');

  if (catalogMenu) {
    var resetButton = catalogMenu.querySelector('.button-reset');
    var filters = catalogMenu.querySelector('.catalog__form');

    var resetCheckedFilters = function () {
      var checkedCheckboxes = filters.querySelectorAll('.filters-group__item input:checked');
      var checkedCheckboxesArray = [].slice.call(checkedCheckboxes);

      if (checkedCheckboxesArray.length > 0) {
        checkedCheckboxesArray.forEach(function (element) {
          element.checked = false;
        });
      }
    };

    var onResetButtonClick = function () {
      resetCheckedFilters();
    };

    resetButton.addEventListener('click', onResetButtonClick);
  }
})();
