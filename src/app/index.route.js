(function() {
  'use strict';

  angular
    .module('whitebridge')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('about', {
        url: '/about-us',
        templateUrl: 'app/main/about.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('services', {
        url: '/our-services',
        templateUrl: 'app/main/services.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
