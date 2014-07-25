'use strict';

angular.module('stoogeBloggerzApp')
  .controller('BlogCtrl', function ($scope, blog, author) {

    $scope.authorFilter='';
    $scope.blogPosts = blog.getPosts();
    $scope.authorList = author.getAuthor();
    $scope.searchAuthor = function(author){
      console.log(author.author)
      $scope.authorFilter='' + author.author;
    }
    

});