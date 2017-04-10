(function() {
  'use strict';

  angular.module('app')
    .component('movieSearch', {
      templateUrl: 'js/movies/movie-search.template.html',
      controller: controller
    });

  controller.$inject = ['movieService', '$state']
  function controller(movieService, $state) {
    const vm = this;

    vm.$onInit = onInit;
    vm.searchMovie = searchMovie;

    function onInit() {
      
    }

    function searchMovie() {
      $state.go('movies.list', {query: vm.query})
    };
  };
})();