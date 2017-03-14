(function(){
	'use strict';

	angular
		.module('whitebridge')
		.controller('JobFormController', JobFormController);


	/** @ngInject */
	function JobFormController($uibModalInstance, $http, $log, $sce, toastr){
		var vm = this;
		vm.applicant = {
			name: null,
			dob: null,
			maritalStatus: null,
			gender: null,
			phone: null,
			email: null,
			address: null,
			town: null,
			lga: null,
			state: null,
			qualifications: null
		};

		vm.submittedValues = angular.toJson(vm.applicant);

		vm.config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}
		vm.submitForm = submitForm; 

		
		function submitForm(data){
			// $log.info(data);
			$http({
				method: 'POST',
				url: "public/index.php", 
				data: {
					submittedValues: data,
					submissionType: 'Job' 
				},
				config: vm.config
				}).then(function(response){
					$uibModalInstance.close();
					vm.responseMsg = $sce.trustAsHtml(response);
					toastr.success(vm.responseMsg);
					$log.info(vm.responseMsg);
				}, function(response){
					$uibModalInstance.close();
					if (response.status > 0)
						vm.errorMsg = $sce.trustAsHtml(response.status + ': ' + response.data);
					$log.info(vm.errorMsg);
					toastr.error(vm.errorMsg);
				});
			
		}


	}
})();
