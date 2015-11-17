(function() {

  'use strict';

  angular.module('jukebox')
    .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ["$scope", "$http", "$state"];

    function homeCtrl($scope, $http, $state) {
      var vm = this
      console.log("home controller");
    }

})();
