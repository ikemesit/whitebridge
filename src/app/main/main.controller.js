(function() {
  'use strict';

  angular
    .module('whitebridge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $uibModal, $log, webDevTec, toastr, apiInterface) {
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
    };

    vm.hidden = undefined;
    vm.toggleListing = toggleListing;


    // $uibModal options
    vm.openModal = openModalBox;

    // Facilitators sub data - #Refactor
    vm.facilitatorsSubData = [
      {
        name: 'Olasunkade Azeez',
        qualifications: 'MBA, FITD, FCIPM, SPHR, ACIPD',
        imageUrl: 'assets/images/facilitators/azeez.jpg',
        desc: "<p>Ola Azeez is a consummate Human Resource generalist and Learning and Development expert. He operates at both practice and regulatory levels. A Fellow of Governing Councils of both Nigerian Institute of Training and Development and Chartered Institute of Personnel Management of Nigeria.\He joined CITA Petroleum Group Executive Team – (an IATA Strategic Partner and multiple awards winning enterprise) as General Manager, Human Capital with over 2 decades of value adding business partnering hands-on experience in HRM, General Administration, Sales & Marketing, Supply Chain etc across the sectors of the economy.</p><p>Mr. Azeez is an alumnus of many advanced management development programmes in Nigeria and abroad. He is an internationally certified Trainer in HR, Talent Management, Coaching, Mentoring, Performance Management Systems, Negotiation, Leadership, BPMS. He trained in Ireland, Greece, Romania, Czech Republic and Austria among others.</p>\
 <p>He is an accomplished Facilitator, Motivational Speaker, Public Affairs Analyst, certified Coach/Mentor, Columnist and a multiple award winner.</p>"
      },
      {
        name: 'Faleye, Olufemi S.',
        qualifications: ' ',
        imageUrl: 'assets/images/facilitators/faleye.jpg',
        desc: "<p>Faleye, Olufemi  is a Financial Management Consultant / Accredited Management Trainer (with over 18 years of experience) with all-round and indepth experience in Strategic Financial Management, Human Resources Management, IFRS/IPSAS  Applications and Training of Trainers.</p><p>A holder of M.Sc in Finance, Fellow Chartered Accountant(FSA), Member, Association of Certified Chartered Institute of Taxation(ACCA)(UK), Associate Chartered Institute of Taxation(ACIT).His professional acumen cuts across Auditing, Accounting and Finance, Learning /Development and Consultancy. Currently he is a Deputy Director, Centre for Management Development, South –South Zonal Office, Uyo.<p><p>Faleye is well versed in designing, organising and delivering training programmes. He also has experience in developing Performance Management Systems, Performance Indicators and Benchmarks coupled with high interpersonal, communication, advocacy, training and facilitation skills.</p>"
      },
      {
        name: 'Olabiran, Olamide O. (Mrs.)',
        qualifications: ' ',
        imageUrl: 'assets/images/facilitators/olamide.jpg'
      },
      {
        name: 'Efita Ephraim',
        qualifications: ' ',
        imageUrl: 'assets/images/facilitators/efita.jpg'
      },
      {
        name: 'Usen George Enyie',
        qualifications: ' ',
        imageUrl: 'assets/images/facilitators/usen.jpg'
      },
      {
        name: 'Ekpa, Godwin Clement',
        qualifications: ' ',
        imageUrl: 'assets/images/facilitators/ekpa.jpg'
      }
    ];

    

    // Get selected data to pass to modal
    vm.facilitatorData=[];
    vm.grabSelected = grabSelected;


    // Open job registration form modal
    vm.openJobForm = openJobForm;

    // Open eventregistration form modal
    vm.openEventForm = openEventForm;

    // Fire tab content animation
    vm.showTabContent = function(data){ showTabContent(data); }; //FIXME: Get tab animation to work

  
    activate();

    function activate() {
      getWebDevTec();
      fetchJobRecords();
      fetchEventRecords();
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

    function fetchJobRecords(){
      vm.jobData = apiInterface.getJobRecords();
    }

    function fetchEventRecords(){
      vm.eventData = apiInterface.getEventRecords();
    }

    function openModalBox(size) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/components/modal/templates/modalContent.html',
        controller: 'ModalController',
        controllerAs: 'modal',
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
      
    function grabSelected(data){
      vm.facilitatorData = [];
      vm.facilitatorData.push(data);
    }

    function toggleListing(){
      vm.hidden = !vm.hidden;
    }

    function openJobForm(){
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/jobform/templates/jobFormContent.html',
        controller: 'JobFormController',
        controllerAs: 'jobform',
        size: 'lg'
      });
    }

    function openEventForm(){
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/eventform/templates/eventFormContent.html',
        controller: 'EventFormController',
        controllerAs: 'eventform',
        size: 'lg'
      });
    }


    function showTabContent(data){
        var selectedTab = angular.element(document).data("index", data);
            // activeTab = selectedTab
        $log.info(selectedTab);
    }


  }
})();
