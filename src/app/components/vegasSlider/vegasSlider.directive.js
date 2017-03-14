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
      controller: ContentSliderController,
      controllerAs: 'slider',
      // bindToController: true,
      link: function() {
			//Vegas Slide
      angular.element(document).find(".vegas").vegas({
          autoplay: true,
          delay: 7000,
          timer: false,
          shuffle: false,
          transitionDuration: 2000,
          slides: [
              { src: 'assets/images/mainSliderImgs/bg1.jpg' },
              { src: 'assets/images/mainSliderImgs/bg2.jpg' },
              { src: 'assets/images/mainSliderImgs/bg3.jpg' },
              { src: 'assets/images/mainSliderImgs/bg4.jpg' }
          ],
          // walk: function(index) {
          //   $log.info(index);
          // },
          transition: [ 'fade2', 'zoomOut2', 'swirlLeft2' ]
      });

      // var attr = document.querySelector('.vegas-slide');
      //
      // $log.info(attr.vegas());
      // $interval(function () {
      //   var attr = document.querySelector('.vegas-slide');
      //   var attr2 = document.querySelector('.vegas-slide-inner');
      //   $log.info({
      //     'image': $(attr2).css('background-image'),
      //     'transitions': attr.getAttribute('class')
      //   });
      // }, 7000);
		}

    };

    return directive;

    /** @ngInject */
    function ContentSliderController() {
      // var vm = this;
    }
  }

})();
