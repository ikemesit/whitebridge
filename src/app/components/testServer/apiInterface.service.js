(function() {
  'use strict';

  angular
      .module('whitebridge')
      .service('apiInterface', apiInterface);

  /** @ngInject */
  function apiInterface($log, toastr, _, firebaseArray) {


    var jobs = [
      {
        id: 0,
        title: 'AngularJS Developer',
        description: 'Ready to make $30,000 USD while working for a fortune 500 company from the comfort of your home? Eager to join a network of the most talented remote workers in the world? If so, this role is for you. Work for Crossover, and you’ll earn the most competitive wages on the market, collaborate with the most skilled teams in your field, and work for the most elite companies in the world. Sound too good to be true? Take a closer look...',
        qualifications: 'At least four years of hands-on experience front-end web design, Bachelor’s Degree in Computer Science or related field' + ', '
          + 'General knowledge of back-end web development from a consumer perspective' + ', '
          +'Excellent communication skills (in English)',
        exp: '4',
        salary: '$30,000'
      }
      
    ];

    var events = [
      {
        id: 0,
        title: 'VISIONARY LEADERSHIP AND STRATEGIC THINKING',
        description: 'A one day workshop for all secretaries and private assistants.',
        location: 'De Castle Hotel, Uyo',
        date: '25th June, 2016',
        fee: '50,000'
      }
      
    ];

    var collections = {'jobs':jobs, 'events':events};

    // Get firebase 
    // this.database = firebaseArray.ref;

    // $log.info(this.database);


    // Bind Job functions to scope
    this.getJobRecords = getJobRecords;
    this.postJobRecord = postJobRecord;
    this.updateJobRecord = updateJobRecord;
    this.deleteJobRecord = deleteJobRecord;

    // Bind Event functions to scope
    this.getEventRecords = getEventRecords;
    this.postEventRecord = postEventRecord;
    this.updateEventRecord = updateEventRecord;
    this.deleteEventRecord = deleteEventRecord;

    this.populateFirebase = populateFirebase;

    

    function getJobRecords() {
      return jobs;
    }

    function postJobRecord(newJob) {
      // this.database.$add(collections);
      var recordCount = jobs.push(newJob);
      toastr.success("Job Entry Saved");
      return recordCount;
    }

    function updateJobRecord(index, editedJob){
       for( var i = 0; i < jobs.length; i++){
          if(jobs[i].id === index){
            jobs[i] = Object.assign({}, editedJob);
          }
       }
       toastr.success("Job Entry Edit Saved");
    }

    function deleteJobRecord(index){
        _.remove(jobs, function(job){
          return job.id === index;
        });
    }


    function getEventRecords(){
      return events;
    }

    function postEventRecord(newEvent) {
      var recordCount = events.push(newEvent);
      toastr.success("Event Entry Saved");
      return recordCount;
    }

    function updateEventRecord(index, editedEvent){
      for( var i = 0; i < events.length; i++){
          if(events[i].id === index){
            events[i] = Object.assign({}, editedEvent);
          }
       }
       toastr.success("Event Entry Edit Saved"); 
    }

    function deleteEventRecord(index){
        _.remove(events, function(event){
          return event.id === index;
        });
    }

    function populateFirebase(){
        // this.database.$add(collections);
    }

    
  }

})();
