(function() {
  'use strict';

  angular
    .module('whitebridge')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state) {

    $log.debug('runBlock end');
    var redirectScope = $rootScope;

    redirectScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params, {location: 'replace'})
      }
    });
  }
})();