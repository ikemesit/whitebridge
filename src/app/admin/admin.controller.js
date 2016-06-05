(function() {
  'use strict';

  angular
    .module('whitebridge')
    .controller('AdminController', AdminController);

  /** @ngInject */
  function AdminController($timeout, $log, firebaseArray, _, apiInterface) {
    var vm = this;

    vm.database = firebaseArray.ref;
    
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
    getEventData();

    vm.database.$loaded().then(function(records){
      // vm.jobs = _.find(records, "jobs");
      $log.info(records.key);
    });
  
    // Job Related Functions
    // function getJobData(){
      
    // }

    function saveJobData(data){
        // if(data){
        //   data.id = vm.jobs.length === 0? 0 : vm.jobs[vm.jobs.length - 1].id + 1;
        //   apiInterface.postJobRecord(data);
        // }
        vm.database.$add(data);     
    }

     function editJob(index, data){
      vm.editFormVisible = true;
      // Create new object from data values
      vm.jobEdited = Object.assign({}, data);
      vm.jobEdited.id = index;
    }

    function saveJobEdit(data){ 
      apiInterface.updateJobRecord(data.id, data)
      vm.editFormVisible = false;
    }

    function deleteJob(index){
      apiInterface.deleteJobRecord(index);
    }

    // Event related functions
    
    function getEventData(){
      vm.events = apiInterface.getEventRecords();
    }

    function editEvent(index, data){
      vm.editFormVisible = true;
      // Create new object from data values
      vm.eventEdited = Object.assign({}, data);
      vm.eventEdited.id = index;
    }


    function saveEventData(data){
        if(data){
          apiInterface.postEventRecord(data);
        }
    }

    function saveEventEdit(data){ 
      apiInterface.updateEventRecord(data.id, data)
      vm.editFormVisible = false;
    }

    function deleteEvent(index){
      apiInterface.deleteEventRecord(index);
    }


   

  }
})();
