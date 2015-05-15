var app = angular.module('flapperNews', ['ui.router']);
app.factory('post', [function(){
  var o = {
    posts: []
  };
  return o;
}]);
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
      .state('home', {
        url:'/home',
        templateUrl:'/home.html',
        controller:'MainCtrl'

      }
      .state('posts', {
        url:'/posts/{id}',
        templateUrl:'/posts.html',
        controller: 'PostsCtrl'
      })
      );
      $urlRouterProvider.otherwise('home');
    }]);

app.controller('MainCtrl', [
  '$scope',
  'posts',
function($scope, posts){
  $scope.test = 'Hello World!';
  $scope.posts = posts.posts;
$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0
    });
  $scope.title = '';
  $scope.link = '';

};
$scope.incrementUpvotes = function(post){
  post.upvotes += 1;
};
  }]);

app.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts){

    }]);
