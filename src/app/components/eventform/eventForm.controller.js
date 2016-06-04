(function(){
	'use strict';

	angular
		.module('whitebridge')
		.controller('EventFormController', EventFormController);


	/** @ngInject */
	function EventFormController($uibModalInstance, $log, toastr){
		var vm = this;
		vm.applicant = {
			name: 'Your Full name here',
			dob: 'your Date of Birth here'
		};
		vm.submitForm = function(data){ submitForm(data); };

		



		function submitForm(data){
			$log.info(data);
			$uibModalInstance.close();
			toastr.success("Your data has been saved. We will get back to you soon.");
		}


	}
})();