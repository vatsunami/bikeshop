'use strict';

(function () {
  var sliderCards = document.querySelector('.slider-cards');

  if (sliderCards) {
    var RESIZE_INTERVAL = 500;
    var INDEX_OF_FIRST_ACTIVE_CARD = 4;

    var CountOfActiveCards = {
      DESKTOP: 4,
      TABLET: 2,
      MOBILE: 1
    };

    var ScreenWidth = {
      DESKTOP: 1024,
      TABLET: 768
    };

    var sliderList = sliderCards.querySelector('.slider-cards__list');
    var sliderButtonLeft = sliderCards.querySelector('.toggle--prev');
    var sliderButtonRight = sliderCards.querySelector('.toggle--next');
    var sliderItemsDefault = sliderCards.querySelectorAll('.slider-cards__item');
    var sliderItemsDefaultArray = [].slice.call(sliderItemsDefault);
    var countOfActiveCards;
    var itemsArray = [];

    var fillItemsArray = function () {
      sliderItemsDefault.forEach(function (item) {
        itemsArray.push(item);
      });
    };

    var returnItemsToStart = function () {
      itemsArray = [];
      sliderItemsDefault.forEach(function (element) {
        sliderList.appendChild(element);
      });
    };

    var switchPrice = function () {
      itemsArray.forEach(function (item, index) {
        var price = item.querySelector('.price');
        if (price) {
          if (index >= INDEX_OF_FIRST_ACTIVE_CARD && index < countOfActiveCards + INDEX_OF_FIRST_ACTIVE_CARD) {
            price.querySelector('.price__count').classList.remove('price__count--revers');
            price.querySelector('.price__currency').classList.remove('price__currency--revers');
          } else {
            price.querySelector('.price__count').classList.add('price__count--revers');
            price.querySelector('.price__currency').classList.add('price__currency--revers');
          }
        }
      });
    }

    var checkScreenWidth = function () {
      var screenWidth = window.innerWidth;
      if (screenWidth >= ScreenWidth.DESKTOP) {
        countOfActiveCards = CountOfActiveCards.DESKTOP;
      } else if (screenWidth >= ScreenWidth.TABLET && screenWidth < ScreenWidth.DESKTOP) {
        countOfActiveCards = CountOfActiveCards.TABLET;
      } else {
        countOfActiveCards = CountOfActiveCards.MOBILE;
      }
    };

    var moveCards = function (direction) {
      var firstElement = itemsArray[0];
      var elementsForMove;
      var removedItem;
      if (direction) {
        elementsForMove = itemsArray.slice(0, countOfActiveCards);
        elementsForMove.forEach(function (element) {
          removedItem = itemsArray.shift(element);
          itemsArray.push(removedItem);
          sliderList.appendChild(element);
        });
      } else {
        elementsForMove = itemsArray.slice(-countOfActiveCards);
        elementsForMove.forEach(function (element) {
          removedItem = itemsArray.pop(element);
          itemsArray.unshift(removedItem);
          sliderList.insertBefore(element, firstElement);
        });
      }
      switchPrice();
    };

    var onSliderButtonLeftClick = function () {
      moveCards(false);
    };

    var onSliderButtonRightClick = function () {
      moveCards(true);
    };

    sliderButtonLeft.addEventListener('click', onSliderButtonLeftClick);
    sliderButtonRight.addEventListener('click', onSliderButtonRightClick);

    window.addEventListener('load', function () {
      checkScreenWidth();
      fillItemsArray();
    });

    window.addEventListener('resize', function () {
      var resizeTimeout;
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          checkScreenWidth();
          returnItemsToStart();
          fillItemsArray();
          switchPrice();
        }, RESIZE_INTERVAL);
      }
    });
  }
})();
