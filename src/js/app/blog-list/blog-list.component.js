'use strict';

angular.module('blogList').
	component('blogList', {
		template:" <div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>";
  		controller: function(){
	        console.log("hello")
	        $scope.title = 'click!'
	        $scope.clicks = 0
	        $scope.someClickTest = function($scope){
	            console.log("clicked")
	            $scope.clicks += 1
	            $scope.title = 'Clicked ' + $scope.clicks + ' times'
	        }
	}
 });
    // controller('BlogListController', function($scope){
    //     console.log("hello")
    //     $scope.title = 'click!'
    //     $scope.clicks = 0
    //     $scope.someClickTest = function(){
    //         console.log("clicked")
    //         $scope.clicks += 1
    //         $scope.title = 'Clicked ' + $scope.clicks + ' times'
    //     }
    // });