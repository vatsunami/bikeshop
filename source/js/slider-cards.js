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

      var SliderData = {
        normal: {
          countOfActiveCards: {
            DESKTOP: 3,
            TABLET: 1,
            MOBILE: 1
          },
          indexOfFirstActiveCard: 3,
          topLimitForResizeContainer: 1126,
          translateDefault: -802,
          isPriceSwitch: false,
          containerWidth: 2880,
          marginDefault: 15
        },
        extra: {
          countOfActiveCards: {
            DESKTOP: 4,
            TABLET: 2,
            MOBILE: 1
          },
          indexOfFirstActiveCard: 4,
          topLimitForResizeContainer: 1276,
          translateDefault: -1018,
          isPriceSwitch: true,
          containerWidth: 3396
        }
      };

      var sliderList = sliderCards.querySelector('.slider-cards__list');
      var sliderButtonLeft = sliderCards.querySelector('.toggle--prev');
      var sliderButtonRight = sliderCards.querySelector('.toggle--next');
      var sliderItemsDefault = sliderCards.querySelectorAll('.slider-cards__item');
      var sliderItemsDefaultArray = [].slice.call(sliderItemsDefault);
      var countOfActiveCards;
      var itemsArray = [];
      var indexOfFirstActiveCard;

      var sliderData;
      if (!isExtra) {
        sliderData = SliderData.normal;
      } else {
        sliderData = SliderData.extra;
      }

      indexOfFirstActiveCard = sliderData.indexOfFirstActiveCard;

      var transformSliderExtra = function () {
        if (window.innerWidth <= sliderData.topLimitForResizeContainer && window.innerWidth >= BreakpointWidth.DESKTOP) {
          sliderList.style.width = sliderData.containerWidth - (sliderData.topLimitForResizeContainer - window.innerWidth) * 3 + 'px';
          var translateX = sliderData.translateDefault + (sliderData.topLimitForResizeContainer - window.innerWidth) * 1.5;
          sliderList.style.transform = 'translate(' + translateX + 'px)';
        } else {
          sliderList.style.width = '';
          sliderList.style.transform = '';
        }
      };

      var transformSliderNormal = function () {
        if (window.innerWidth <= sliderData.topLimitForResizeContainer && window.innerWidth >= BreakpointWidth.DESKTOP) {
          sliderList.style.width = sliderData.containerWidth - (sliderData.topLimitForResizeContainer - window.innerWidth) * 2.647059 + 'px';
          var margin;
          itemsArray.forEach(function (item) {
            margin = sliderData.marginDefault - (sliderData.topLimitForResizeContainer - window.innerWidth) * 0.14705882;
            item.style.marginLeft = margin + 'px';
            item.style.marginRight = margin + 'px';
          });
          var translateX = sliderData.translateDefault + (sliderData.topLimitForResizeContainer - window.innerWidth) * 1.27451;
          sliderList.style.transform = 'translate(' + translateX +  'px)';
        } else {
          itemsArray.forEach(function (item) {
            item.style.marginLeft = '';
            item.style.marginRight = '';
          });
          sliderList.style.width = '';
          sliderList.style.transform = '';
        }
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

      var switchDisabledClass = function () {
        itemsArray.forEach(function (item, index) {
          if (index >= indexOfFirstActiveCard && index < countOfActiveCards + indexOfFirstActiveCard) {
            item.classList.remove('slider-cards__item--disabled');
          } else {
            item.classList.add('slider-cards__item--disabled');
          }
        });
      };

      var switchCards = function () {
        if (sliderData.isPriceSwitch) {
          switchPrice();
        }
        switchDisabledClass();
      };

      var setCountOfActiveCards = function () {
        if (window.innerWidth >= BreakpointWidth.DESKTOP) {
          countOfActiveCards = sliderData.countOfActiveCards.DESKTOP;
        } else if (window.innerWidth >= BreakpointWidth.TABLET && window.innerWidth < BreakpointWidth.DESKTOP) {
          countOfActiveCards = sliderData.countOfActiveCards.TABLET;
        } else {
          countOfActiveCards = sliderData.countOfActiveCards.MOBILE;
        }
        console.log(countOfActiveCards);
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
        switchCards();
      };

      var onSliderButtonRightClick = function () {
        moveCards(true);
        switchCards();
      };

      sliderButtonLeft.addEventListener('click', onSliderButtonLeftClick);
      sliderButtonRight.addEventListener('click', onSliderButtonRightClick);

      window.addEventListener('load', function () {
        setCountOfActiveCards();
        fillItemsArray();
        switchCards();
        if (!isExtra) {
          transformSliderNormal();
        } else {
          transformSliderExtra();
        }
      });

      window.addEventListener('resize', function () {
        var resizeTimeout;
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(function () {
            resizeTimeout = null;
            setCountOfActiveCards();
            returnItemsToStart();
            fillItemsArray();
            switchCards();
            if (!isExtra) {
              transformSliderNormal();
            } else {
              transformSliderExtra();
            }
          }, RESIZE_INTERVAL);
        }
      });
    }
  };
})();

sliderMultipleCards('#slider-cards', false);
sliderMultipleCards('#slider-cards-extra', true);
