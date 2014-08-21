'use strict';

var appController = function($scope){
    this.ready = true;
    this.message = "Hello!";
};

appController['$inject'] = ['$scope'];

angular.module('newApp').controller('appController', appController );
