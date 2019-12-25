'use strict';

var sliderMultipleCards = (function () {
  return function (selector, isExtra) {
    var sliderCards = document.querySelector(selector);

    if (sliderCards) {
      var RESIZE_INTERVAL = 500;

      var BreakpointWidth = {
        DESKTOP: 1024,
        TABLET: 768
      };

      var CountOfActiveCards = {
        DESKTOP: {
          normal: 3,
          extra: 4
        },
        TABLET: {
          normal: 1,
          extra: 2
        },
        MOBILE: {
          normal: 1,
          extra: 1
        }
      };

      var sliderList = sliderCards.querySelector('.slider-cards__list');
      var sliderButtonLeft = sliderCards.querySelector('.toggle--prev');
      var sliderButtonRight = sliderCards.querySelector('.toggle--next');
      var sliderItemsDefault = sliderCards.querySelectorAll('.slider-cards__item');
      var sliderItemsDefaultArray = [].slice.call(sliderItemsDefault);
      var indexOfFirstActiveCard;
      var countOfActiveCards;
      var itemsArray = [];

      if (isExtra) {
        indexOfFirstActiveCard = 4;
      } else {
        indexOfFirstActiveCard = 3;
      }

      var fillItemsArray = function () {
        sliderItemsDefaultArray.forEach(function (item) {
          itemsArray.push(item);
        });
      };

      var returnItemsToStart = function () {
        itemsArray = [];
        sliderItemsDefaultArray.forEach(function (element) {
          sliderList.appendChild(element);
        });
      };

      var switchPrice = function () {
        itemsArray.forEach(function (item, index) {
          var price = item.querySelector('.price');
          if (price) {
            if (index >= indexOfFirstActiveCard && index < countOfActiveCards + indexOfFirstActiveCard) {
              price.querySelector('.price__count').classList.remove('price__count--revers');
              price.querySelector('.price__currency').classList.remove('price__currency--revers');
            } else {
              price.querySelector('.price__count').classList.add('price__count--revers');
              price.querySelector('.price__currency').classList.add('price__currency--revers');
            }
          }
        });
      };

      var checkScreenWidth = function () {
        var screenWidth = window.innerWidth;
        if (screenWidth >= BreakpointWidth.DESKTOP) {
          if (isExtra) {
            countOfActiveCards = CountOfActiveCards.DESKTOP.extra;
          } else {
            countOfActiveCards = CountOfActiveCards.DESKTOP.normal;
          }
        } else if (screenWidth >= BreakpointWidth.TABLET && screenWidth < BreakpointWidth.DESKTOP) {
          if (isExtra) {
            countOfActiveCards = CountOfActiveCards.TABLET.extra;
          } else {
            countOfActiveCards = CountOfActiveCards.TABLET.normal;
          }
        } else {
          if (isExtra) {
            countOfActiveCards = CountOfActiveCards.MOBILE.extra;
          } else {
            countOfActiveCards = CountOfActiveCards.MOBILE.normal;
          }
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
      };

      var onSliderButtonLeftClick = function () {
        moveCards(false);
        if (isExtra) {
          switchPrice();
        }
      };

      var onSliderButtonRightClick = function () {
        moveCards(true);
        if (isExtra) {
          switchPrice();
        }
      };

      sliderButtonLeft.addEventListener('click', onSliderButtonLeftClick);
      sliderButtonRight.addEventListener('click', onSliderButtonRightClick);

      window.addEventListener('load', function () {
        checkScreenWidth();
        fillItemsArray();
        if (isExtra) {
          switchPrice();
        }
      });

      window.addEventListener('resize', function () {
        var resizeTimeout;
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(function () {
            resizeTimeout = null;
            checkScreenWidth();
            returnItemsToStart();
            fillItemsArray();
            if (isExtra) {
              switchPrice();
            }
          }, RESIZE_INTERVAL);
        }
      });
    }
  };
})();

sliderMultipleCards('#slider-cards', false);
sliderMultipleCards('#slider-cards-extra', true);
