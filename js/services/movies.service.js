(function() {
  'use strict';

  angular.module('app')
    .service('movieService', service);

    service.$inject = ['$http'];
    function service($http) {
      this.getMovies = getMovies;
      this.getMovieById = getMovieById;

      function getMovies(query) {
        return $http.get(`http://www.omdbapi.com/?s=${encodeURIComponent(query)}`)
          .then(res => {
            return res.data.Search;
          });
      };

      function getMovieById(id) {
        return $http.get(`http://www.omdbapi.com/?i=${id}`)
          .then(res => {
            return res.data;
          });
      }
    };
})();