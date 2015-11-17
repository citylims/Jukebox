'use strict';

angular
  .module('jukebox', ['jukebox.controllers'])
  .config(config);


  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state("login", {
      url: "/login",
      controller: "loginCtrl",
      template: "templates/login.html"
    });

    .state("jukebox", {
      url: "/",
      controller: "homeCtrl",
      template: "templates/jukebox.html"
    });

    $urlRouterProvider.otherwise("/login");
  }
