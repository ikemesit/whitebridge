(function() {
  'use strict';

  angular
      .module('whitebridge')
      .service('apiInterface', apiInterface);

  /** @ngInject */
  function apiInterface(toastr) {
    var jobs = [
      {
        'title': 'AngularJS Developer',
        'description': 'Ready to make $30,000 USD while working for a fortune 500 company from the comfort of your home? Eager to join a network of the most talented remote workers in the world? If so, this role is for you. Work for Crossover, and you’ll earn the most competitive wages on the market, collaborate with the most skilled teams in your field, and work for the most elite companies in the world. Sound too good to be true? Take a closer look...',
        'qualifications': 
        [
          'At least four years of hands-on experience front-end web design, Bachelor’s Degree in Computer Science or related field',
          'General knowledge of back-end web development from a consumer perspective',
          'Excellent communication skills (in English)'
        ],
        'exp': '4',
        'salary': '$30,000'
      }
      
    ];

    var events = [
      {
        'title': 'VISIONARY LEADERSHIP AND STRATEGIC THINKING',
        'description': 'A one day workshop for all secretaries and private assistants.',
        'location': 'De Castle Hotel, Uyo',
        'date': '25th June, 2016',
        'fee': '50,000'
      }
      
    ];

    // Bind functions to scope
    this.getJobRecords = getJobRecords;
    this.postJobRecord = postJobRecord;
    this.getEventRecords = getEventRecords;
    this.postEventRecord = postEventRecord;

    function getJobRecords() {
      return jobs;
    }

    function postJobRecord(newJob) {
      var recordCount = jobs.push(newJob);
      toastr.success("Job Entry Saved");
      return recordCount;
    }

    function getEventRecords(){
      return events;
    }

    function postEventRecord(newEvent) {
      var recordCount = events.push(newEvent);
      toastr.success("Event Entry Saved");
      return recordCount;
    }
  }

})();
