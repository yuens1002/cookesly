'use strict';

/**
 * @ngdoc service
 * @name cookbriteApp.styleIt
 * @description
 * # styleIt
 * Factory in the cookbriteApp.
 */
angular.module('cookbriteApp')
  .factory('styleIt', function ($resource) {
      return $resource(
        {
          headerSpacing: 'blinkPage',
          logo: 'brand2'
        }
      
      );
  });
