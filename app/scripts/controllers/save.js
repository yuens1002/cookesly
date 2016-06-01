'use strict';

/**
 * @ngdoc function
 * @name cookbriteApp.controller:SaveCtrl
 * @description
 * # SaveCtrl
 * Controller of the cookbriteApp
 */
angular.module('cookbriteApp')
  .controller('SaveCtrl', function ($scope, $localStorage, angularGridInstance) { 
    
    //sets the intital state of the ingredient list
    $scope.isCollapsed = true;

    // reflow the page when the ingredient list is opened / collapased
    $scope.reflow = function () {
      // console.log("i'm here");
      angularGridInstance.gallery.refresh();
    };  
  
    //getting the data from storage to scope for the view  
    $scope.savedRecipes = $localStorage.savedRecipes;
   
  
    $scope.delRecipe = function(recipe) {
      // get index of the object to splice from $localStorage array
      var objID = $localStorage.savedRecipes.indexOf(recipe);
      $localStorage.savedRecipes.splice(objID,1);
    };
  });
