(function(){
	'use strict';

	angular
		.module('whitebridge')
		.factory('firebaseArray', firebaseArray);

		/** @ngInject */
		function firebaseArray($log, $firebaseArray){
		
			// Get Firebase database object
			var ref = firebase.database().ref();

			return {
				ref: $firebaseArray(ref)
			}


		}
})();