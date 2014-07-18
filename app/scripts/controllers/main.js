'use strict';

/**
 * @ngdoc function
 * @name stoogeBloggerzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stoogeBloggerzApp
 */
angular.module('stoogeBloggerzApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
