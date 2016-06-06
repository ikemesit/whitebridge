(function(){
	'use strict';

	angular
		.module('whitebridge')
		.factory('firebaseArray', firebaseArray);

		/** @ngInject */
		function firebaseArray($log, $firebaseArray){

			// Get Firebase database data end-points
      var jobsRef = firebase.database().ref("jobs");
			var eventsRef = firebase.database().ref("events");

			return {
				jobsRef: $firebaseArray(jobsRef),
        eventsRef: $firebaseArray(eventsRef)
			}


		}
})();
