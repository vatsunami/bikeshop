'use strict';

(function () {
  var catalogMenu = document.querySelector('.catalog__menu');

  if (catalogMenu) {
    var RESIZE_INTERVAL = 500;
    var BREAKPOINT_DESKTOP = 1024;

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
          if (window.innerWidth >= BREAKPOINT_DESKTOP) {
            closeCatalogMenu();
          }
        }, RESIZE_INTERVAL);
      }
    });
  }
})();
