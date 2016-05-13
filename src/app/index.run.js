(function() {
  'use strict';

  angular
    .module('whitebridge')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
