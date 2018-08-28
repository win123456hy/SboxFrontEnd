'use strict';

/**
 * @ngdoc overview
 * @name toDoListWithYeoManApp
 * @description
 * # toDoListWithYeoManApp
 *
 * Main module of the application.
 */
angular
  .module('toDoListWithYeoManApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/toDoList', {
        templateUrl: 'views/todolist.html',
        controller: 'TodolistCtrl',
        controllerAs: 'toDoList'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
