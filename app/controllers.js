define(function (require) {
  
  var angular = require('angular'),
      Controllers = angular.module('controllers', []);
  
  Controllers.controller('mainController', require('controllers/MainController'));
  
  return Controllers;
  
});