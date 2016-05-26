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
     

    $scope.alerts = [];

    // sets the classes used for the start of the page 
    $scope.headerSpacing = 'blinkPage';
    $scope.logo = 'brand2';
  
    // saving to controller storage from browser storage
    // necessary to display the link to saved recipes for 
    // the ng-if statement
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
        // storages sync upon save
        $scope.storage = $localStorage;
        // alert('recipe saved');
        $scope.alerts.push({type:'success', msg: 'Recipe saved!', recipeID: recipeData.id});
      } else {
        var save = true;
        for (var i=0; i < $localStorage.savedRecipes.length; i++) {
          if ($localStorage.savedRecipes[i].id == recipeData.id) {
            save = false;
          }
        }
        if (save === true) {
          $localStorage.savedRecipes.push(recipeData);
          // storages sync upon push
          $scope.storage = $localStorage;
          $scope.alerts.push({type:'success', msg: 'Recipe saved!', recipeID: recipeData.id});
        } else {
          $scope.alerts.push({type:'danger', msg: 'Recipe already saved!', recipeID: recipeData.id});
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
        // saving the search string to display as  
        // the title of the page so that it does not
        // update upon a new search entry
        $scope.searchString = $scope.ingredient;
        // assingment from search input field to the API service call   
        $scope.recipes = recipes.query({
            ingredient: $scope.ingredient
        });
        // resets the search input field each time the API is called
        $scope.ingredient = '';
        $scope.headerSpacing = 'page'; 
        $scope.logo = 'brand';   
          
        // always load search result in main.html view where mainCtrl is being called
        // thus allowing getRecipes function be used as a partial injected in any view  
        window.location.href='#/main';
        }
    };
  });
