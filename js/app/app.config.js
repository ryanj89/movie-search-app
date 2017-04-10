(function() {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'movies',
        url: '/',
        component: 'movieSearch'
      })
      .state({
        name: 'movies.list',
        url: ':query',
        component: 'movieList'
      })
      .state({
        name: 'movies.detail',
        url: ':id/show',
        component: 'movieDetail'
      })
  };
})();