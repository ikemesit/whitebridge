(function() {
  'use strict';

  angular
    .module('whitebridge')
    .controller('AdminController', AdminController);

  /** @ngInject */
  function AdminController($timeout, webDevTec, toastr, apiInterface) {
    var vm = this;

  
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1463136796626;
    vm.showToastr = showToastr;
    vm.jobs = {
      'title' : 'Title of job offered',
      'description' : 'Job description',
      'qualifications' : 'Qualifications desired',
      'experience' : "Desired years of experience",
      "salary" : "Salary Offered"
    };
    vm.events = {
      'title' : 'Title of event',
      'description' : 'Event description',
      'location' : 'Event location',
      'date' : "Event date",
      "fee" : "Event fee"
    };

    // Insert record function
    vm.saveJob = function(data){ return saveJobData(data);};
    vm.saveEvent = function(data){ return saveEventData(data);};
    


    activate();

    function activate() {
      getWebDevTec();
      //loadTestServer();
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
	
    // function loadTestServer(){
    //  vm.testData = testServer.getData();
    // }

    function saveJobData(data){
        apiInterface.postJobRecord(data);
    }

    function saveEventData(data){
        apiInterface.postEventRecord(data);
    }

  }
})();
