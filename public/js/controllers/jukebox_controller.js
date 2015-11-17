(function() {

  'use strict';

  angular.module('jukebox')
    .controller('JukeboxCtrl', JukeboxCtrl);

    JukeboxCtrl.$inject = ["$scope", "$http", "$state"];

    function JukeboxCtrl($scope, $http, $state) {
      var vm = this
    }

})()
