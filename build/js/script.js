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
