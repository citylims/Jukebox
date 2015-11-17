(function() {
  'use strict';

  angular
    .module('jukebox', ['ui.router'])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
      })

      .state('jukebox', {
        url: '/jukebox',
        templateUrl: 'templates/jukebox.html',
        controller: 'JukeboxCtrl',
      })

    $urlRouterProvider.otherwise('/home');
  };

})();
