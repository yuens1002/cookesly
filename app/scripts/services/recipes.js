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
  
  return $resource('https://api.edamam.com/search?&q=:ingredient&from=:starting&to=:ending&app_id=c3607cc5&app_key=3f6cc51402ce76557eabe753c575c891',
                    {
                        callback: 'JSON_CALLBACK'
                    },
                    {
                        query: {
                          method:'JSONP',
                          params: {
                             ingredient: '',
                             starting: '0',
                             ending: '1'
                          },
                          isArray:false
                        }
                    }
                );
  
  /*
  $http.jsonp('https://api.edamam.com/search', {params: {'callback':'eqfeed_callback'}})
    .then(function(data) {
    $resource = data;
  });
  */
  /*
    return $resource('https://api.edamam.com/search?&q=:ingredient&from=:starting&to=:ending&app_id=c3607cc5&app_key=3f6cc51402ce76557eabe753c575c891', {}, {
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
    */
});
                     