(function() {
  'use strict';

  angular
    .module('whitebridge')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, uiGmapGoogleMapApiProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    uiGmapGoogleMapApiProvider.configure({
      v: '3.20', 
      libraries: 'weather,geometry,visualization'
    });

  }

})();
