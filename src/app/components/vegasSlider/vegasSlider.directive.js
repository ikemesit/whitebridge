(function() {
  'use strict';

  angular
    .module('whitebridge')
    .directive('vegasSlider', vegasSlider);

  /** @ngInject */
  function vegasSlider() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/vegasSlider/vegasSlider.html',
      // scope: {
      //     creationDate: '='
      // },
      controller: ContentSliderController,
      //controllerAs: 'vm',
      bindToController: true,
      link: function() {
			//Vegas Slide
      angular.element(document).find(".vegas").vegas({
          autoplay: true,
          delay: 7000,
          timer: false,
          shuffle: true,
          transition: 'fade',
          transitionDuration: 2000,
          slides: [
              { src: 'assets/images/mainSliderImgs/bg1.jpg' },
              { src: 'assets/images/mainSliderImgs/bg2.jpg' },
              { src: 'assets/images/mainSliderImgs/bg3.jpg' },
              { src: 'assets/images/mainSliderImgs/bg4.jpg' }
          ]
      });
		}
      
    };

    return directive;

    /** @ngInject */
    function ContentSliderController() {
      //var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
      //console.log('im ready');
    }
  }

})();



