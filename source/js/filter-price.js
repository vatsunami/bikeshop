'use strict';

(function () {
  var filterPrice = document.querySelector('.filter-price');

  if (filterPrice) {
    var KEY_CODE_NUMBERS_LIMITS = {
      MIN: 48,
      MAX: 57
    };

    var filterPriceMin = filterPrice.querySelector('.filter-price input[id="min"]');
    var filterPriceMax = filterPrice.querySelector('.filter-price input[id="max"]');

    var isKeyCodeNumber = function (pressedKey) {
      var keyCode = pressedKey.keyCode;
      if (keyCode < KEY_CODE_NUMBERS_LIMITS.MIN || keyCode > KEY_CODE_NUMBERS_LIMITS.MAX) {
        return true;
      }
      return false;
    };

    var onFilterPriceMinKeyPress = function (evt) {
      var isNumber = isKeyCodeNumber(evt);
      if (isNumber) {
        evt.preventDefault();
      }
    };

    var onFilterPriceMaxKeyPress = function (evt) {
      var isNumber = isKeyCodeNumber(evt);
      if (isNumber) {
        evt.preventDefault();
      }
    };

    filterPriceMin.addEventListener('keypress', onFilterPriceMinKeyPress);
    filterPriceMax.addEventListener('keypress', onFilterPriceMaxKeyPress);
  }
})();
