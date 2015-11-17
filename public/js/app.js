(function() {
  'use strict';

  angular
    .module('jukebox', ['ui.router'])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl as vm',
      })

      .state('jukebox', {
        url: '/jukebox',
        templateUrl: 'templates/jukebox.html',
        controller: 'JukeboxCtrl as vm',
      })

    $urlRouterProvider.otherwise('/');
  };

})();
