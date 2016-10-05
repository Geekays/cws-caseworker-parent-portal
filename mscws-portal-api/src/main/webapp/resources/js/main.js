/**
 * Main AngularJS Web Application
 */
var app = angular.module('cwsUnisysApp', ['ngRoute', 'angular-input-stars', 'ngMap','SearchModule']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/search.html", controller: "SearchController"})
    .when("/search", {templateUrl: "partials/search.html", controller: "SearchController"})
	//Provider Search
	.when("/providerSearch", {templateUrl: "partials/providerSearch.html", controller: "ResultsController"})
	//Star Rating
	.when("/starRating", {templateUrl: "partials/starRating.html", controller: "PageCtrl"})
	.when("/bookAppointment", {templateUrl: "partials/bookAppointment.html", controller: "PageCtrl"})
	.when("/moreDetails", {templateUrl: "partials/moreDetails.html", controller: "PageCtrl"})
    // else 404
	 .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


/**
 * Controllers
 */
app.controller('PageCtrl', function ($scope) {
  console.log("Page Controller reporting for duty.");
	$scope.mapToggle = true;
	$scope.listToggle = false;
	
  
    $scope.mapViewFunc = function() {
        $scope.mapToggle = !$scope.mapToggle;
		$scope.listToggle = !$scope.listToggle;
    }
    $scope.listViewFunc = function() {
        $scope.listToggle = !$scope.listToggle;
		$scope.mapToggle = !$scope.mapToggle;	
    }


});
app.controller('starRatingCtrl', function ($scope) {
	$scope.expandToggle = true;
	$scope.collapseToggle = false;

    $scope.expandAllFunc = function() {
        $scope.expandToggle = !$scope.expandToggle;
		$scope.collapseToggle = !$scope.collapseToggle;
		
		$('.custom-panel a[name^="#"]').each(function (index) {
			$(this).removeClass('collapsed');
		});
		$('.custom-panel .panel-collapse').each(function (index) {
			$(this).collapse('show');
		});
			
    }
    $scope.collapseAllFunc = function() {
        $scope.expandToggle = !$scope.expandToggle;
		$scope.collapseToggle = !$scope.collapseToggle;	
	
		$('.custom-panel a[name^="#"]').each(function (index) {
			$(this).addClass('collapsed');
		});
		$('.custom-panel .panel-collapse').each(function (index) {
			$(this).collapse('hide');
		});
    }
	angular.module('ngMap').run(
									function($rootScope) {
										$rootScope.$on('mapInitialized',
												function(evt, map) {
													$rootScope.mymap = map;
													$rootScope.$apply();
												});

									});
			

});








