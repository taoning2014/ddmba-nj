angular
  .module('main', ['ngMaterial', 'ngMessages'])
  .controller('LoginCtrl', function($scope, $window) {
    $scope.login = function() {
      console.log('Click login');
      $window.location.href='/api/login';
    }
  })
  .controller('IndexCtrl', function($scope, $window) {
    $scope.goEditHomePage = function() {
      console.log('Click goEditHomePage');
      $window.location.href='/editHomePage.html';
    };

    $scope.goAddArticlePage = function() {
      console.log('Click goAddArticlePage');
      $window.location.href='/addArticlePage.html';
    }
  })
  .controller('EditHomeCtrl', function($scope) {

  })
  .controller('AddArticleCtrl', function($scope) {

  })
  .config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('light-green')
      .dark();
  });
