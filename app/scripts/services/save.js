'use strict';

/**
 * @ngdoc service
 * @name cookbriteApp.save
 * @description
 * # save
 * Factory in the cookbriteApp.
 */
angular.module('cookbriteApp')
  .factory('save', function ($resource) {


    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife
      }
    };
  });
