(function(){
	'use strict';

	angular
		.module('whitebridge')
		.factory('_', lodashFactory);


		function lodashFactory($window){
			if(!$window){
				return "error";
			}

			return $window._;
		}

		return {'_': lodashFactory()};
})();