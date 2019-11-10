'use strict';

var pageHeader = document.querySelector('.page-header');
var pageHeaderTop = pageHeader.querySelector('.page-header__top')
var pageHeaderTopContainer = pageHeader.querySelector('.page-header__top-container');
var pageHeaderLogoWrapper = pageHeader.querySelector('.page-header__logo-wrapper');
var pageHeaderMainNav = pageHeader.querySelector('.page-header__main-nav');
var menuButton = pageHeader.querySelector('.page-header__menu-button');
var pageHeaderUserAccount = pageHeader.querySelector('.page-header__user-account');
var pageHeaderUserNav = pageHeader.querySelector('.page-header__user-nav');
var pageHeaderUserNavList = pageHeaderUserNav.querySelector('.user-nav__list')
var cart = pageHeaderUserNav.querySelector('.user-nav__item--cart');
var cartLink = cart.querySelector('.user-nav__link--cart');
var cartIcon = cart.querySelector('.user-nav__icon--cart');
var cartText = cart.querySelector('.user-nav__text--cart');
var cartCount = cart.querySelector('.user-nav__count--cart');
var search = pageHeaderUserNavList.querySelector('.user-nav__item--search');

var closeHeaderMenu = function () {
  menuButton.classList.add('page-header__menu-button--closed');
  menuButton.classList.remove('menu-button--close');
  pageHeaderTop.classList.add('page-header__top--closed')
  pageHeaderTopContainer.classList.add('page-header__top-container--closed')
  pageHeaderLogoWrapper.classList.add('page-header__logo-wrapper--closed')
  pageHeaderMainNav.classList.add('main-nav--closed');
  pageHeaderUserAccount.classList.add('user-account--closed');
  pageHeaderUserNav.classList.add('page-header__user-nav--closed');
  pageHeaderUserNav.classList.add('user-nav--closed');
  pageHeaderUserNavList.classList.add('user-nav__list--closed')
  cart.classList.add('user-nav__item--cart-closed')
  cartLink.classList.add('user-nav__link--cart-closed')
  cartIcon.classList.add('user-nav__icon--cart-closed')
  cartText.classList.add('user-nav__text--cart-closed')
  cartCount.classList.add('user-nav__count--cart-closed')
  search.classList.add('user-nav__item--search-closed')
}

var openHeaderMenu = function () {
  menuButton.classList.remove('page-header__menu-button--closed');
  menuButton.classList.add('menu-button--close');
  pageHeaderTop.classList.remove('page-header__top--closed')
  pageHeaderTopContainer.classList.remove('page-header__top-container--closed')
  pageHeaderLogoWrapper.classList.remove('page-header__logo-wrapper--closed')
  pageHeaderMainNav.classList.remove('main-nav--closed');
  pageHeaderUserAccount.classList.remove('user-account--closed');
  pageHeaderUserNav.classList.remove('page-header__user-nav--closed');
  pageHeaderUserNav.classList.remove('user-nav--closed');
  pageHeaderUserNavList.classList.remove('user-nav__list--closed')
  cart.classList.remove('user-nav__item--cart-closed')
  cartLink.classList.remove('user-nav__link--cart-closed')
  cartIcon.classList.remove('user-nav__icon--cart-closed')
  cartText.classList.remove('user-nav__text--cart-closed')
  cartCount.classList.remove('user-nav__count--cart-closed')
  search.classList.remove('user-nav__item--search-closed')
}

window.addEventListener('load', function (evt) {
  closeHeaderMenu();
});

menuButton.addEventListener('click', function () {
  if (menuButton.classList.contains('page-header__menu-button--closed')) {
    openHeaderMenu();
  } else {
    closeHeaderMenu();
  }
});
