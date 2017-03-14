(function () {
  'use strict';

  angular
    .module('whitebridge')
    .controller('AdminController', AdminController);

  /** @ngInject */
  function AdminController($timeout, $log, $state, firebaseArray, _, toastr, cvManager, adminAuthService) {
    var vm = this;


    vm.jobsDataRef = firebaseArray.jobsRef;
    vm.eventsDataRef = firebaseArray.eventsRef;

    //Admin Sign In Credentials
    vm.email = "Enter admin email";
    vm.password = "Enter passowrd";
    vm.signInUser = signIn;
    vm.signOutUser = signOut;

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

    // Retrieve Jobs data and assign
    vm.jobsDataRef.$loaded().then(function (records) {
      vm.jobs = records;
    });

    // Retrieve Events data and assign
    vm.eventsDataRef.$loaded().then(function (records) {
      vm.events = records;
    });

    // Get CV Data
    vm.cvRecords;
    getCvRecords();

    //Switch admin side bar visibility
    vm.sideBar;
    checkLoggedIn();


    function saveJobData(data) {
      if (data) {
        data['timestamp'] = firebase.database.ServerValue.TIMESTAMP;
        vm.jobsDataRef.$add(data);
        toastr.success("Job Entry Saved");
      }
    }

    function editJob(index, data) {
      vm.editFormVisible = true;
      vm.jobEdited = data;
    }

    function saveJobEdit(data) {
      vm.jobsDataRef.$save(data);
      vm.editFormVisible = false;
      toastr.success("Job Entry Updated");
    }

    function deleteJob(data) {
      vm.jobsDataRef.$remove(data);
      toastr.success("Job Entry Deleted");
    }

    // Event related functions
    function editEvent(data) {
      vm.editFormVisible = true;
      vm.eventEdited = data;
    }

    function saveEventData(data) {
      if (data) {
        vm.eventsDataRef.$add(data);
        toastr.success("Event Entry Saved");
      }
    }

    function saveEventEdit(data) {
      vm.eventsDataRef.$save(data);
      vm.editFormVisible = false;
      toastr.success("Event Entry Updated");
    }

    function deleteEvent(data) {
      vm.eventsDataRef.$remove(data);
      toastr.success("Event Entry Deleted");
    }

    function getCvRecords() {
      cvManager.getCvData().then(function (data) {
        vm.cvRecords = data;
      });
    }

    function signIn(email, password) {
      vm.sideBar = false;
      adminAuthService.signIn(email, password);
    }

    function signOut() {
      vm.sideBar = true;
      $state.go("admin.login");
      return adminAuthService.signOut();
    }

    function checkLoggedIn() {
      firebaseArray.authRef.$onAuthStateChanged(function () {
        var loggedIn = firebaseArray.authRef.$getAuth();
        if (loggedIn)
          vm.sideBar = true;
        else
          vm.sideBar = false;
      });
    }


  }//Finis
})();
