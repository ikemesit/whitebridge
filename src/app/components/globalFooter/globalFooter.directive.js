(function(){
	'use strict';

	angular
		.module('whitebridge')
		.directive('globalFooter', globalFooter);

		/** @ngInject */
		function globalFooter(){
			var directive = {
				name: 'globalFooter',
				restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
				templateUrl: 'app/components/globalFooter/globalFooter.html'
			};

			return directive;
		}
})();