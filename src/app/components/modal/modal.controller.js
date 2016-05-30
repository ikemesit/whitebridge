(function(){
	'use strict';

	angular
		.module('whitebridge')
		.controller('ModalController', ModalController);


	/** @ngInject */
	function ModalController($uibModalInstance, $log, items){
		var vm = this;

		vm.chosen = items;
		vm.selected = {
			item: vm.chosen[0]
		};


		//vm.renderBody = function(data){return renderBody(data);};

		// function renderBody(data, $sce){
		// 	return $sce.trustAsHtml(data);
		// }
		// vm.ok = function () {
		// 	$uibModalInstance.close(vm.selected.item);
		// };

		// vm.cancel = function () {
		// 	$uibModalInstance.dismiss('cancel');
		// };

	}
})();