(function (){
	'use strict';

	angular
		.module('whitebridge')
		.factory('cvManager', cvManager);


		function cvManager ($http, $log){

			var api = 'http://www.whitebridgeconsult.com/public/cvApi.php';
			var	service = {
				api: api,
				getCvData: getCvData
			}
			return service;


			function getCvData(){
				return $http.get(api)
					.then(getCvDataComplete)
					.catch(getCvDataFailed);


				function getCvDataComplete(response){
					return response.data;
				}

				function getCvDataFailed(error){
					$log.error('xhr failed for getCVData.\n' + angular.toJson(error.data, true));
				}
			}
		}
})();