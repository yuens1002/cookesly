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
        callback: 'JSON_CALLBACK'  //required for JSONP Method
    },
    {
        query: {
          method:'JSONP',
          params: {
            // if needed, params: objects can be passed in from view 
            starting: '0',
             ending: '12'
          },
          isArray:false
        }
    }
  );
  });                   