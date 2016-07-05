(function(){

	'use strict';

	angular
		.module('whitebridge')
		.service('adminAuthService', adminAuthService);


	function adminAuthService($log, firebaseArray, $q, $state, $timeout){

		var vm = this;

		
		vm.signIn = signInUser;
		vm.signOut = signOut;
		vm.isLoggedIn = isUserLoggedIn;


		function signInUser(email, password){
			var errorCode, errorMessage;
			firebaseArray.authRef.$signInWithEmailAndPassword(email, password).then(function (firebaseUser){
				$log.info("Signed In as " + firebaseUser.uid);
				$timeout($state.go("admin.managejobs"), 20);
			}).catch(function(error){
				// Handle Errors
				errorCode = error.code;
				errorMessage = error.message;
				$log.info(errorCode, errorMessage);
				return false;
			});
		}

		function isUserLoggedIn(){
			var userObj = firebaseArray.authRef.$getAuth();
			if(userObj !== null){
				$log.info(userObj);
				return true;
			}else{
				return false;
			}
		}

		function signOut(){
			firebaseArray.authRef.$signOut();
		}
	}


})();