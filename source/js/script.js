'use strict';

var pageHeader = document.querySelector('.page-header');
var pageHeaderTop = pageHeader.querySelector('.page-header__top');
var pageHeaderTopContainer = pageHeader.querySelector('.page-header__top-container');
var pageHeaderLogo = pageHeader.querySelector('.page-header__logo');
var mainNav = pageHeader.querySelector('.page-header__main-nav');
var menuButton = pageHeader.querySelector('.page-header__menu-button');
var userAccount = pageHeader.querySelector('.page-header__user-account');
var userNav = pageHeader.querySelector('.page-header__user-nav');
var userNavList = userNav.querySelector('.user-nav__list');
var cart = userNavList.querySelector('.user-nav__item.user-cart');
var cartLink = cart.querySelector('.user-cart__link');
var cartIcon = cart.querySelector('.user-cart__icon');
var cartText = cart.querySelector('.user-cart__text');
var cartCount = cart.querySelector('.user-cart__count');
var search = userNavList.querySelector('.user-nav__item.user-search');
var catalogMenu = document.querySelector('.catalog__menu');

var closeHeaderMenu = function () {
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
  cartIcon.classList.add('user-cart__icon--closed');
  cartText.classList.add('user-cart__text--closed');
  cartCount.classList.add('user-cart__count--closed');
  search.classList.add('user-search--closed');
}

var openHeaderMenu = function () {
  menuButton.classList.remove('page-header__menu-button--closed');
  menuButton.classList.add('menu-button--close');
  pageHeaderTop.classList.remove('page-header__top--closed');
  pageHeaderTopContainer.classList.remove('page-header__top-container--closed');
  pageHeaderLogo.classList.remove('page-header__logo--closed');
  mainNav.classList.remove('main-nav--closed');
  userAccount.classList.remove('user-account--closed');
  userNav.classList.remove('user-nav--closed');
  userNavList.classList.remove('user-nav__list--closed');
  cart.classList.remove('user-nav__item--closed');
  cart.classList.remove('user-cart--closed');
  cartLink.classList.remove('user-cart__link--closed');
  cartIcon.classList.remove('user-cart__icon--closed');
  cartText.classList.remove('user-cart__text--closed');
  cartCount.classList.remove('user-cart__count--closed');
  search.classList.remove('user-search--closed');
}

menuButton.addEventListener('click', function () {
  if (menuButton.classList.contains('page-header__menu-button--closed')) {
    openHeaderMenu();
  } else {
    closeHeaderMenu();
  }
});

if (catalogMenu) {
  var catalogHeader = catalogMenu.querySelector('.catalog-header');
  var catalogHeaderButtons = catalogMenu.querySelector('.catalog-header__buttons');
  var catalogHeaderButtonFilters = catalogMenu.querySelector('.catalog-header__button-filters');
  var catalogHeaderButtonReset = catalogMenu.querySelector('.catalog-header__button-reset');
  var catalogHeaderButtonClose = catalogMenu.querySelector('catalog-header__button-close');
  var catalogHeaderSort = catalogMenu.querySelector('.catalog-header__sort');
  var catalogHeaderGrid = catalogMenu.querySelector('.catalog-header__grid');
  var gridCount = catalogHeaderGrid.querySelector('.grid-count');
  var catalogHeaderButtonClose = catalogMenu.querySelector('.catalog-header__button-close');
  var catalogForm = catalogMenu.querySelector('.catalog__form');

  var closeCatalogMenu = function () {
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
  }

  var openCatalogMenu = function () {
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
  }

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
}

window.addEventListener('load', function (evt) {
  closeHeaderMenu();
  if (catalogMenu) {
    closeCatalogMenu();
  }
});
