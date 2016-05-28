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
      })

      .state('contact', {
        url: '/contact-us',
        templateUrl: 'app/main/contact.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('jobs', {
        url: '/jobs',
        templateUrl: 'app/main/jobListing.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('events', {
        url: '/events',
        templateUrl: 'app/main/eventListing.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/templates/admin.html',
        controller: 'AdminController',
        redirectTo: 'admin.managejobs',
        controllerAs: 'admin'
      })

      .state('admin.managejobs', {
        url: '/manage-jobs',
        templateUrl: 'app/admin/templates/managejobs.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      })

      .state('admin.manageevents', {
        url: '/manage-events',
        templateUrl: 'app/admin/templates/manageevents.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
