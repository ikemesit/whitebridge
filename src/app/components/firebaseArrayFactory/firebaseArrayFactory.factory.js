(function(){
	'use strict';

	angular
		.module('whitebridge')
		.factory('firebaseArray', firebaseArray);

		/** @ngInject */
		function firebaseArray($log, $firebaseArray, $firebaseAuth){

			// Get required Firebase auth instance
			var authRef = $firebaseAuth();

			// Get Firebase database data end-points
			var jobsRef = firebase.database().ref("jobs");
			var eventsRef = firebase.database().ref("events");

			return {
				authRef: authRef,
				jobsRef: $firebaseArray(jobsRef),
				eventsRef: $firebaseArray(eventsRef)
			}

		}
})();
