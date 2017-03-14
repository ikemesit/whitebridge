(function () {
  'use strict';

  angular
    .module('whitebridge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($uibModal, $log, $timeout, $interval, $aside, firebaseArray, Upload, moment, arbData) {
    var vm = this;

    vm.jobsDataRef = firebaseArray.jobsRef;
    vm.eventsDataRef = firebaseArray.eventsRef;

    // Map Settings
    vm.map = { center: { latitude: 5.0151090, longitude: 7.9529442 }, zoom: 15 };
    vm.options = { draggable: false, scrollwheel: false };

    // Map Marker
    vm.marker = {
      id: 1,
      coords: { "latitude": 5.0151090, "longitude": 7.9539446 },
      options: { title: 'Whitebridge Consulting', draggable: false, animation: 1 }
    };

    vm.hidden = undefined;
    vm.toggleListing = toggleListing;

    // $uibModal options
    vm.openModal = openModalBox;

    // Facilitators sub data
    vm.facilitatorsSubData = arbData.getFacultyMem();


    //Progress bar max
    vm.max = 100;

    // Progress bar progress track
    vm.dynamic;

    // CV upload objects
    vm.file;
    vm.errorMsg;

    // CV upload function
    vm.uploadFiles = uploadFiles;

    // CV upload name model
    vm.cvName = "";

    // Get selected data to pass to modal
    vm.facilitatorData = [];
    vm.grabSelected = grabSelected;

    // Open job registration form modal
    vm.openJobForm = openJobForm;

    // Open eventregistration form modal
    vm.openEventForm = openEventForm;

    // Fire tab content animation
    vm.showTabContent = function (data) { showTabContent(data); }; //FIXME: Get tab animation to work

    // Fetch Listings Records
    vm.jobsDataRef.$loaded().then(function (records) {
      vm.jobs = records;
      vm.jobs.forEach(function (job) {
        // job['timestamp'] = moment.
      })
    });

    vm.eventsDataRef.$loaded().then(function (records) {
      vm.events = records;
    });


    // Text Slider
    vm.slideNo = 0;
    vm.caption = [{
      header: "Be in demand",
      body: "At Whitebridge we build professionals from ground up",
      action: "Learn More",
      link: "about"
    }, {
      header: "Know your job",
      body: "Acquire the skills your career needs for the next level",
      action: "Start Here",
      link: "events"
    }, {
      header: "Recruit right and Enjoy Growth",
      body: "It’s simple...great employees make a great company",
      action: "Let's Help",
      link: "services"
    }, {
      header: "Get valuable insights",
      body: "With the best, learning and building never stops",
      action: "Our Insights",
      link: "http://www.whitebridgeconsult.com/blog"
    }];

    $timeout(
      $interval(function () {
        if (vm.slideNo == vm.caption.length - 1) {
          vm.slideNo = 0;
        } else {
          vm.slideNo = vm.slideNo + 1;
        }
      }, 7300),
      2000
    );



    function openModalBox(size) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/components/modal/templates/modalContent.html',
        controller: 'ModalController',
        controllerAs: 'modal',
        backdrop: true,
        size: size,
        resolve: {
          items: function () {
            return vm.facilitatorData; //vm.facilitatorsSubData;
          }
        }
      });

      modalInstance.result.then(function (selected) {
        vm.selected = selected;
      }, function () {
        $log.info('Selected Item = ' + vm.selected);
        $log.info('Modal dismissed at: ' + new Date());
      });
    }

    function grabSelected(data) {
      vm.facilitatorData = [];
      vm.facilitatorData.push(data);
    }

    function toggleListing() {
      vm.hidden = !vm.hidden;
    }

    function openJobForm() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/jobform/templates/jobFormContent.html',
        controller: 'JobFormController',
        controllerAs: 'jobform',
        size: 'lg'
      });
    }

    function openEventForm() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/eventform/templates/eventFormContent.html',
        controller: 'EventFormController',
        controllerAs: 'eventform',
        size: 'lg'
      });
    }


    function showTabContent(data) {
      var selectedTab = angular.element(document).data("index", data);
      // activeTab = selectedTab
      $log.info(selectedTab);
    }


    function uploadFiles(file, errFiles) {
      vm.file = file;
      vm.errFile = errFiles && errFiles[0];
      if (file) {
        file.upload = Upload.upload({
          url: '/public/index.php',
          method: 'POST',
          data: {
            file: file,
            cvName: vm.cvName
            // date: new date() To get date of upload and add to posted data
          }
        });

        vm.file.upload.then(function (response) {
          $timeout(function () {
            vm.file.result = response.data;
          });
        }, function (response) {
          if (response.status > 0)
            vm.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
          vm.successMsg;
          vm.dynamic = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          if (vm.dynamic === 100) {
            $timeout(function () { vm.dynamic = -1; vm.successMsg = "Upload successful!"; }, 1000);
            $timeout(function () { vm.successMsg = ""; }, 4000);
          }
        }
        );
      }
    }


  }
})();
