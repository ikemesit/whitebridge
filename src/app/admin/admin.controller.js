(function() {
  'use strict';

  angular
    .module('whitebridge')
    .controller('AdminController', AdminController);

  /** @ngInject */
  function AdminController($timeout, $log, firebaseArray, _, apiInterface, toastr) {
    var vm = this;

    vm.jobsDataRef = firebaseArray.jobsRef;
    vm.eventsDataRef = firebaseArray.eventsRef;

    // Jobs collection from API
    vm.jobs = [];
    // Job object edited
    vm.jobEdited = {};
    // New Job object to add
    vm.job = {};

    // Events collection from API
    vm.events = {};
    // Event object edited
    vm.eventEdited = {};
    // New Event Object to add
    vm.event = {};


    // Job related functions
    vm.saveJobEdit = saveJobEdit;
    vm.editJob = editJob;
    vm.saveJob = saveJobData;
    vm.deleteJob = deleteJob;

    // Event related functions
    vm.saveEvent = saveEventData;
    vm.saveEventEdit = saveEventEdit;
    vm.editEvent = editEvent;
    vm.deleteEvent = deleteEvent;

    // Set required flag
    vm.required = true;


    // getJobData();
    // getEventData();

    vm.jobsDataRef.$loaded().then(function(records){
      vm.jobs = records;
      // $log.info(records);
    });

    vm.eventsDataRef.$loaded().then(function(records){
      vm.events = records;
      // $log.info(records);
    });

    // Job Related Functions
    // function getJobData(){

    // }

    function saveJobData(data){
        // if(data){
        //   data.id = vm.jobs.length === 0? 0 : vm.jobs[vm.jobs.length - 1].id + 1;
        //   apiInterface.postJobRecord(data);
        // }
        vm.jobsDataRef.$add(data);
        toastr.success("Job Entry Saved");
    }

     function editJob(index, data){
      vm.editFormVisible = true;
      // Create new object from data values
      // vm.jobEdited = Object.assign({}, data);
      // vm.jobEdited.id = index;
      vm.jobEdited = data;
      // $log.info(index);
    }

    function saveJobEdit(data){
      // apiInterface.updateJobRecord(data.id, data)
      vm.jobsDataRef.$save(data);
      vm.editFormVisible = false;
      toastr.success("Job Entry Updated");
    }

    function deleteJob(data){
      // apiInterface.deleteJobRecord(index);
      vm.jobsDataRef.$remove(data);
      toastr.success("Job Entry Deleted");
    }

    // Event related functions

    // function getEventData(){
      // vm.events = apiInterface.getEventRecords();
    // }

    function editEvent(data){
      vm.editFormVisible = true;
      // Create new object from data values
      // vm.eventEdited = Object.assign({}, data);
      // vm.eventEdited.id = index;
      vm.eventEdited = data;
      
    }


    function saveEventData(data){
        if(data){
          // apiInterface.postEventRecord(data);
          vm.eventsDataRef.$add(data);
        }
    }

    function saveEventEdit(data){
      // apiInterface.updateEventRecord(data.id, data)
      // vm.editFormVisible = false;
      vm.eventsDataRef.$save(data);
      vm.editFormVisible = false;
      toastr.success("Event Entry Updated");
    }

    function deleteEvent(data){
      vm.eventsDataRef.$remove(data);
      toastr.success("Event Entry Deleted");
      // apiInterface.deleteEventRecord(index);
    }




  }
})();
