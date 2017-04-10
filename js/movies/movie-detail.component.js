(function() {
  'use strict';

  angular.module('app')
    .component('movieDetail', {
      templateUrl: 'js/movies/movie-detail.template.html',
      controller: controller
    });

    controller.$inject = ['movieService', '$stateParams']
    function controller(movieService, $stateParams) {
      const vm = this;

      vm.$onInit = onInit

      function onInit() {
        movieService.getMovieById($stateParams.id).then(results => {
          console.log(results)
          vm.movie = results
        })
      }
    };
})();