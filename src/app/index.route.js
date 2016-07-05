(function() {
  'use strict';

  angular
    .module('whitebridge')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/templates/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('about', {
        url: '/about-us',
        templateUrl: 'app/main/templates/about.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('services', {
        url: '/our-services',
        templateUrl: 'app/main/templates/services.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('jobs', {
        url: '/jobs',
        templateUrl: 'app/main/templates/jobListing.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('events', {
        url: '/events',
        templateUrl: 'app/main/templates/eventListing.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('blog', {
        url: '/blog',
        onEnter: function($window){ $window.open("http://www.whitebridgeconsult.com/blog/", "_self"); }
      })

      .state('contact', {
        url: '/contact-us',
        templateUrl: 'app/main/templates/contact.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/templates/admin.html',
        controller: 'AdminController',
        redirectTo: 'admin.login',
        controllerAs: 'admin'
      })

      .state('admin.login', {
        url: '/login',
        templateUrl: 'app/admin/templates/login.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      })

      .state('admin.managejobs', {
        url: '/manage-jobs',
        templateUrl: 'app/admin/templates/managejobs.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        resolve: {
          'auth': ['firebaseArray', function(firebaseArray){
            return firebaseArray.authRef.$requireSignIn();
          }]
        }
      })

      .state('admin.manageevents', {
        url: '/manage-events',
        templateUrl: 'app/admin/templates/manageevents.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        resolve: {
          'auth': ['firebaseArray', function(firebaseArray){
            return firebaseArray.authRef.$requireSignIn();
          }]
        }
      })

      .state('admin.cvrecords', {
        url: '/view-uploaded-cvs',
        templateUrl: 'app/admin/templates/cvrecords.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        resolve: {
          'auth': ['firebaseArray', function(firebaseArray){
            return firebaseArray.authRef.$requireSignIn();
          }]
        } 
      });

    // function authFunc(adminAuthService){
    //   return adminAuthService.isLoggedIn();
    // }

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
