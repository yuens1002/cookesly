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
  
  $scope.isCollapsed = true;
  
  //msg for pop tips on homepage
  $scope.popSearch = {
    content: 'Recipe search can be done by entering an ingredient or name.  For more than one ingredient, enter each ingredient followed by a comma.  For example: walnut, apple, salad',
    title: 'Search Tips',
  };
    
   //check if recipe has been saved by id
    $scope.isSaved = function (ID) {
      for (var i = 0; i < $localStorage.savedRecipes.length; i++) {
        if ($localStorage.savedRecipes[i].id == ID) {
          return true;
        }
      } 
    }

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
      
      // define alert param
      $scope.alerts = 
        [
        {type:'success', msg: 'Recipe Saved!', recipeID: recipeData.id},
        {type:'danger', msg: 'the search box is empty, try entering a name of a dish or an ingredient in the search box to perform a search'}
        ];
      
      if (!$localStorage.savedRecipes){
        $localStorage.savedRecipes = [recipeData];
        // storages sync upon save
        $scope.storage = $localStorage;
        // alert('recipe saved');
        $scope.alerts[0];
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
          // alert('recipe saved');
          $scope.alerts[0];
        }
       }
      };
    
    //manual alert close
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
    
    $scope.isEnterKey = function(event){
        // checks to see if the key is the ENTER key
      if (event.keyCode === 13) {
        $scope.getRecipes();
      }
    };
  
    $scope.getRecipes = function(){
        // if query is left empty, don't assign, change placeholder text;
        if (!$scope.ingredient) {
          document.getElementById("searchInput").placeholder = 'try entering an ingredient...';
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
        //reverts the placeholder text to default if it had been changed by the empty input check
        document.getElementById("searchInput").placeholder = 'recipe search by ingredient or name';  
        $scope.headerSpacing = 'page'; 
        $scope.logo = 'brand';   
          
        // always load search result in main.html view where mainCtrl is being called
        // thus allowing getRecipes function be used as a partial injected in any view  
        window.location.href='#/main';
        }
    };
  });
