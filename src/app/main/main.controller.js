(function() {
  'use strict';

  angular
    .module('whitebridge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, testServer) {
    var vm = this;

  
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1463136796626;
    vm.showToastr = showToastr;

    // Map Settings
    vm.map = { center: { latitude: 5.0151090, longitude: 7.9529442 }, zoom: 15};
    vm.options = {draggable: false, scrollwheel: false};

    // Map Marker
    vm.marker = {
      id : 1,
      coords : {"latitude": 5.0151090,"longitude": 7.9539446},
      options : {title: 'Whitebridge Consulting', draggable: false, animation: 1}
    }

    // Test Server
    //vm.testData = loadTestServer();

    //console.log(vm.testData);


    activate();

    function activate() {
      getWebDevTec();
      loadTestServer();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function loadTestServer(){
      vm.testData = testServer.getData();
    }
  }
})();
