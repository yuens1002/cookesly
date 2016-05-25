'use strict';

/**
 * @ngdoc function
 * @name cookbriteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookbriteApp
 */
angular.module('cookbriteApp')
  .controller('MainCtrl', function ($scope, $localStorage, recipes) {
     
//     $scope.hideAlert = true;
  $scope.alerts = [];
  
    // saving to controller storage from browser storage
    $scope.storage = $localStorage;
  
    // passing key:value objects from eachRecipe in main.html to saveRecipe function  
    $scope.saveRecipe = function(recipe) {
      var recipeData = {
        'label': recipe.recipe.label,
        'image': recipe.recipe.image,
        'ingredients': recipe.recipe.ingredientLines,
        'source': recipe.recipe.source,
        'servings': recipe.recipe.yield,
        'source_url': recipe.recipe.url,
        'calories': recipe.recipe.calories,
        'id': recipe.recipe.uri
      };
      if (!$localStorage.savedRecipes){
        $localStorage.savedRecipes = [recipeData];
        $scope.storage = $localStorage;
        // alert('recipe saved');
        $scope.alerts.push({type:'success', msg: 'recipe saved!', recipeID: recipeData.id});
      } else {
        var save = true;
        for (var i=0; i < $localStorage.savedRecipes.length; i++) {
          if ($localStorage.savedRecipes[i].id == recipeData.id) {
            save = false;
          }
        }
        if (save === true) {
          $localStorage.savedRecipes.push(recipeData);
          $scope.storage = $localStorage;
//        // object
          $scope.alerts.push({type:'success', msg: 'recipe saved!', recipeID: recipeData.id});
        } else {
          $scope.alerts.push({type:'danger', msg: 'recipe already saved!', recipeID: recipeData.id});
        }
      }
    };
  
   $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
   
    
    $scope.getRecipes = function(){
        // if query is left empty, don't assign, display alert();
        if (!$scope.ingredient) {
          alert('search field is empty');
        } else {
        $scope.searchString = $scope.ingredient;
        $scope.recipes = recipes.query({
            ingredient: $scope.ingredient
        });
        
        $scope.ingredient = '';
      
        window.location.href='#/main';
        }
    };
  });
