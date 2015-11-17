(function() {

  'use strict';

  angular.module('jukebox')
    .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ["$scope", "$http", "$state"];

    function loginCtrl($scope, $http, $state) {
      var vm = this
    }

})();
