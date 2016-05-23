(function() {
  'use strict';

  angular
    .module('whitebridge')
    .controller('AdminController', AdminController);

  /** @ngInject */
  function AdminController($timeout, webDevTec, toastr, testServer) {
    var vm = this;

  
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1463136796626;
    vm.showToastr = showToastr;
    //vm.testData = loadTestServer();
    vm.test = {
		'title': 'NodeJS Developer',
		'description': 'Ready to make $30,000 USD while working for a fortune 500 company from the comfort of your home? Eager to join a network of the most talented remote workers in the world? If so, this role is for you. Work for Crossover, and you’ll earn the most competitive wages on the market, collaborate with the most skilled teams in your field, and work for the most elite companies in the world. Sound too good to be true? Take a closer look...',
		'qualifications': [
          'At least four years of hands-on experience front-end web design, Bachelor’s Degree in Computer Science or related field',
          'General knowledge of back-end web development from a consumer perspective',
          'Excellent communication skills (in English)'
        ],
		'exp': '4',
		'salary': '$30,000'
    };

    // Insert record function
    vm.save = insertTestData();

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

    function insertTestData(){
		var newRecordCount = testServer.postData(vm.test);
		return newRecordCount;
    }
  }
})();
