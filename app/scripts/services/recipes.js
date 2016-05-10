'use strict';

/**
 * @ngdoc service
 * @name cookbriteApp.recipes
 * @description
 * # recipes
 * Factory in the cookbriteApp.
 */
angular.module('cookbriteApp')
  .factory('recipes', function ($resource) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource('https://api.edamam.com/search?q=:ingredient&from=:starting&to=:ending&app_id=c3607cc5&app_key=3f6cc51402ce76557eabe753c575c891', {}, {
      query: {
        method:'GET',
        params: {
           ingredient: '',
           starting: '0',
           ending: '1'
        },
        isArray:false
      }
    });
});
                     