'use strict';

/**
 * @ngdoc function
 * @name stoogeBloggerzApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stoogeBloggerzApp
 */
angular.module('stoogeBloggerzApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
