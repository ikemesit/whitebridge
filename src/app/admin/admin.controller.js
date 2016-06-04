(function() {
  'use strict';

  angular
    .module('whitebridge')
    .controller('AdminController', AdminController);

  /** @ngInject */
  function AdminController($timeout, webDevTec, toastr, apiInterface) {
    var vm = this;
    vm.jobEdited = {
      'title' : 'Title of job offered',
      'description' : 'Job description',
      'qualifications' : 'Qualifications desired',
      'experience' : "Desired years of experience",
      "salary" : "Salary Offered"
    };

    vm.jobs = [{
      'title' : 'Title of job offered',
      'description' : 'Job description',
      'qualifications' : 'Qualifications desired',
      'experience' : "Desired years of experience",
      "salary" : "Salary Offered"
    }];
    vm.events = {
      'title' : 'Title of event',
      'description' : 'Event description',
      'location' : 'Event location',
      'date' : "Event date",
      "fee" : "Event fee"
    };
    vm.saveEdit = saveEdit;
    vm.editJob = editJob;

    // Insert record function
    vm.saveJob = saveJobData;
    vm.saveEvent = saveEventData;
    

    getJobData();

    function getJobData(){
      vm.jobs = apiInterface.getJobRecords();
    }

    function saveJobData(data){
        if(data){
          apiInterface.postJobRecord(data);
        }     
    }

    function saveEventData(data){
        if(data){
          apiInterface.postEventRecord(data);
        }
    }

    function editJob(data){
      vm.editFormVisible = true;
      vm.jobEdited = data;
    }

    function saveEdit(data){
      vm.editFormVisible = false;
    }

  }
})();
