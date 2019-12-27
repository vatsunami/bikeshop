'use strict';

(function () {
  window.resizeInterval = 500;

  window.breakpointWidth = {
    DESKTOP: 1024,
    TABLET: 768
  };
})();


(function () {
  var pageHeader = document.querySelector('.page-header');

  if (pageHeader) {
    var body = document.body;
    var pageHeaderWrapper = pageHeader.querySelector('.page-header__wrapper');
    var pageHeaderTop = pageHeader.querySelector('.page-header__top');
    var pageHeaderTopContainer = pageHeader.querySelector('.page-header__top-container');
    var pageHeaderLogo = pageHeader.querySelector('.page-header__logo');
    var mainNav = pageHeader.querySelector('.page-header__main-nav');
    var mainNavLinks = mainNav.querySelectorAll('.main-nav__link');
    var mainNavLinksArray = [].slice.call(mainNavLinks);
    var menuButton = pageHeader.querySelector('.page-header__menu-button');
    var userAccount = pageHeader.querySelector('.page-header__user-account');
    var userNav = pageHeader.querySelector('.page-header__user-nav');
    var userNavList = userNav.querySelector('.user-nav__list');
    var cart = userNavList.querySelector('.user-nav__item.user-cart');
    var cartLink = cart.querySelector('.user-cart__link');
    var cartIconWrapper = cart.querySelector('.user-cart__icon-wrapper');
    var cartText = cart.querySelector('.user-cart__text');
    var cartCount = cart.querySelector('.user-cart__count');
    var search = userNavList.querySelector('.user-nav__item.user-search');

    var closeHeaderMenu = function () {
      body.classList.remove('noscroll-header-menu');
      menuButton.classList.add('page-header__menu-button--closed');
      menuButton.classList.remove('menu-button--close');
      pageHeaderTop.classList.add('page-header__top--closed');
      pageHeaderTopContainer.classList.add('page-header__top-container--closed');
      pageHeaderLogo.classList.add('page-header__logo--closed');
      mainNav.classList.add('main-nav--closed');
      userAccount.classList.add('user-account--closed');
      userNav.classList.add('user-nav--closed');
      userNavList.classList.add('user-nav__list--closed');
      cart.classList.add('user-nav__item--closed');
      cart.classList.add('user-cart--closed');
      cartLink.classList.add('user-cart__link--closed');
      cartIconWrapper.classList.add('user-cart__icon-wrapper--closed');
      cartText.classList.add('user-cart__text--closed');
      cartCount.classList.add('user-cart__count--closed');
      search.classList.add('user-search--closed');

      if (pageHeaderWrapper) {
        pageHeaderWrapper.classList.add('page-header__wrapper--closed');
        if (pageHeaderWrapper.classList.contains('page-header__wrapper--active-js')) {
          pageHeaderWrapper.classList.remove('page-header__top--active-js');
        }
      }

      if (pageHeaderTop.classList.contains('page-header__top--active-js')) {
        pageHeaderTop.classList.remove('page-header__top--active-js');
      }
    };

    var openHeaderMenu = function () {
      body.classList.add('noscroll-header-menu');
      menuButton.classList.remove('page-header__menu-button--closed');
      menuButton.classList.add('menu-button--close');
      pageHeaderTop.classList.remove('page-header__top--closed');
      pageHeaderTop.classList.add('page-header__top--active-js');
      pageHeaderTopContainer.classList.remove('page-header__top-container--closed');
      pageHeaderLogo.classList.remove('page-header__logo--closed');
      mainNav.classList.remove('main-nav--closed');
      userAccount.classList.remove('user-account--closed');
      userNav.classList.remove('user-nav--closed');
      userNavList.classList.remove('user-nav__list--closed');
      cart.classList.remove('user-nav__item--closed');
      cart.classList.remove('user-cart--closed');
      cartLink.classList.remove('user-cart__link--closed');
      cartIconWrapper.classList.remove('user-cart__icon-wrapper--closed');
      cartText.classList.remove('user-cart__text--closed');
      cartCount.classList.remove('user-cart__count--closed');
      search.classList.remove('user-search--closed');

      if (pageHeaderWrapper) {
        pageHeaderWrapper.classList.add('page-header__wrapper--active-js');
      }

      if (pageHeaderWrapper && pageHeaderWrapper.classList.contains('page-header__wrapper--closed')) {
        pageHeaderWrapper.classList.remove('page-header__wrapper--closed');
      }
    };

    menuButton.addEventListener('click', function () {
      if (menuButton.classList.contains('page-header__menu-button--closed')) {
        openHeaderMenu();
      } else {
        closeHeaderMenu();
      }
    });

    mainNav.addEventListener('click', function (evt) {
      var target = evt.target;
      var isMainNavLink = mainNavLinksArray.some(function (linkItem) {
        return target === linkItem;
      });
      if (isMainNavLink) {
        closeHeaderMenu();
      }
    });

    window.addEventListener('load', function () {
      closeHeaderMenu();
    });

    window.addEventListener('resize', function () {
      var resizeTimeout;
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          if (window.innerWidth >= window.breakpointWidth.DESKTOP) {
            closeHeaderMenu();
          }
        }, window.resizeInterval);
      }
    });
  }
})();


(function () {
  var catalogMenu = document.querySelector('.catalog__menu');

  if (catalogMenu) {
    var body = document.body;
    var catalogHeader = catalogMenu.querySelector('.catalog-header');
    var catalogHeaderButtons = catalogMenu.querySelector('.catalog-header__buttons');
    var catalogHeaderButtonFilters = catalogMenu.querySelector('.catalog-header__button-filters');
    var catalogHeaderButtonReset = catalogMenu.querySelector('.catalog-header__button-reset');
    var catalogHeaderSort = catalogMenu.querySelector('.catalog-header__sort');
    var catalogHeaderGrid = catalogMenu.querySelector('.catalog-header__grid');
    var gridCount = catalogHeaderGrid.querySelector('.grid-count');
    var catalogHeaderButtonClose = catalogMenu.querySelector('.catalog-header__button-close');
    var catalogForm = catalogMenu.querySelector('.catalog__form');

    var closeCatalogMenu = function () {
      body.classList.remove('noscroll-catalog-menu');
      catalogMenu.classList.add('catalog__menu--closed');
      catalogHeader.classList.add('catalog__header--closed');
      catalogHeader.classList.add('catalog-header--closed');
      catalogHeaderButtons.classList.add('catalog-header__buttons--closed');
      catalogHeaderButtonFilters.classList.add('catalog-header__button-filters--closed');
      catalogHeaderButtonReset.classList.add('catalog-header__button-reset--closed');
      catalogHeaderButtonClose.classList.add('catalog-header__button-close--closed');
      catalogHeaderSort.classList.add('catalog-header__sort--closed');
      catalogHeaderGrid.classList.add('catalog-header__grid--closed');
      gridCount.classList.add('grid-count--closed');
      catalogForm.classList.add('catalog__form--closed');

      if (catalogMenu.classList.contains('catalog__menu--closed')) {
        catalogMenu.classList.remove('catalog__menu--active-js');
      }
    };

    var openCatalogMenu = function () {
      body.classList.add('noscroll-catalog-menu');
      catalogMenu.classList.remove('catalog__menu--closed');
      catalogHeader.classList.remove('catalog__header--closed');
      catalogHeader.classList.remove('catalog-header--closed');
      catalogHeaderButtons.classList.remove('catalog-header__buttons--closed');
      catalogHeaderButtonFilters.classList.remove('catalog-header__button-filters--closed');
      catalogHeaderButtonReset.classList.remove('catalog-header__button-reset--closed');
      catalogHeaderButtonClose.classList.remove('catalog-header__button-close--closed');
      catalogHeaderSort.classList.remove('catalog-header__sort--closed');
      catalogHeaderGrid.classList.remove('catalog-header__grid--closed');
      gridCount.classList.remove('grid-count--closed');
      catalogForm.classList.remove('catalog__form--closed');

      if (!catalogMenu.classList.contains('catalog__menu--closed')) {
        catalogMenu.classList.add('catalog__menu--active-js');
      }
    };

    catalogHeaderButtonFilters.addEventListener('click', function () {
      if (catalogHeaderButtonFilters.classList.contains('catalog-header__button-filters--closed')) {
        openCatalogMenu();
      }
    });

    catalogHeaderButtonClose.addEventListener('click', function () {
      if (!catalogHeaderButtonClose.classList.contains('catalog-header__button-close--closed')) {
        closeCatalogMenu();
      }
    });

    window.addEventListener('load', function () {
      closeCatalogMenu();
    });

    window.addEventListener('resize', function () {
      var resizeTimeout;
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          if (window.innerWidth >= window.breakpointWidth.DESKTOP) {
            closeCatalogMenu();
          }
        }, window.resizeInterval);
      }
    });
  }
})();


var sliderMultipleCards = (function () {
  return function (selector, isExtra) {
    var sliderCards = document.querySelector(selector);

    if (sliderCards) {
      var SLIDER_DATA = {
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
          containerWidth: 3396,
          marginDefault: 0
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
        sliderData = SLIDER_DATA.normal;
      } else {
        sliderData = SLIDER_DATA.extra;
      }
      indexOfFirstActiveCard = sliderData.indexOfFirstActiveCard;

      var transformSliderExtra = function () {
        if (window.innerWidth <= sliderData.topLimitForResizeContainer && window.innerWidth >= window.breakpointWidth.DESKTOP) {
          sliderList.style.width = sliderData.containerWidth - (sliderData.topLimitForResizeContainer - window.innerWidth) * 3 + 'px';
          var translateX = sliderData.translateDefault + (sliderData.topLimitForResizeContainer - window.innerWidth) * 1.5;
          sliderList.style.transform = 'translate(' + translateX + 'px)';
        } else {
          sliderList.style.width = '';
          sliderList.style.transform = '';
        }
      };

      var transformSliderNormal = function () {
        if (window.innerWidth <= sliderData.topLimitForResizeContainer && window.innerWidth >= window.breakpointWidth.DESKTOP) {
          sliderList.style.width = sliderData.containerWidth - (sliderData.topLimitForResizeContainer - window.innerWidth) * 2.647059 + 'px';
          var margin;
          itemsArray.forEach(function (item) {
            margin = sliderData.marginDefault - (sliderData.topLimitForResizeContainer - window.innerWidth) * 0.14705882;
            item.style.marginLeft = margin + 'px';
            item.style.marginRight = margin + 'px';
          });
          var translateX = sliderData.translateDefault + (sliderData.topLimitForResizeContainer - window.innerWidth) * 1.27451;
          sliderList.style.transform = 'translate(' + translateX + 'px)';
        } else {
          itemsArray.forEach(function (item) {
            item.style.marginLeft = '';
            item.style.marginRight = '';
          });
          sliderList.style.width = '';
          sliderList.style.transform = '';
        }
      };

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
        if (window.innerWidth >= window.breakpointWidth.DESKTOP) {
          countOfActiveCards = sliderData.countOfActiveCards.DESKTOP;
        } else if (window.innerWidth >= window.breakpointWidth.TABLET && window.innerWidth < window.breakpointWidth.DESKTOP) {
          countOfActiveCards = sliderData.countOfActiveCards.TABLET;
        } else {
          countOfActiveCards = sliderData.countOfActiveCards.MOBILE;
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
          }, window.resizeInterval);
        }
      });
    }
  };
})();

sliderMultipleCards('#slider-cards', false);
sliderMultipleCards('#slider-cards-extra', true);


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
      });
    });
  }
})();


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


(function () {
  var tabs = document.querySelector('.product-details');

  if (tabs) {
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
        if (window.innerWidth >= window.breakpointWidth.TABLET) {
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
          if (window.innerWidth >= window.breakpointWidth.TABLET) {
            activeTabIndexCurrent = activeTabIndexDefault;
            window.sliderColors.switchActiveElement(activeTabIndexCurrent, togglesArray, 'product-details__toggle--active');
            window.sliderColors.switchActiveElement(activeTabIndexCurrent, sectionsArray, 'product-details__section--active');
          }
        }, window.resizeInterval);
      }
    });

    tabs.addEventListener('click', onToggleClick);
  }
})();
