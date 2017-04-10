(function() {
  'use strict';

  angular.module('app')
    .component('movieList', {
      templateUrl: 'js/movies/movie-list.template.html',
      controller: controller
    });

    controller.$inject = ['movieService', '$stateParams']
    function controller(movieService, $stateParams) {
      const vm = this;
      
      vm.$onInit = onInit

      function onInit() {
        movieService.getMovies($stateParams.query).then(res => {
          vm.movies = res
        })
      }
    };
})();