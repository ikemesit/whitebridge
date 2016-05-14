(function() {
  'use strict';

  angular
    .module('whitebridge')
    .directive('contentSlider', contentSlider);

  /** @ngInject */
  function contentSlider() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/slider/slider.html',
      // scope: {
      //     creationDate: '='
      // },
      controller: ContentSliderController,
      //controllerAs: 'vm',
      bindToController: true,
      link: function() {
			angular.element(document).find('.featurette-slider').unslider(
				{
					'autoplay' : true,
					'arrows' :{
						'prev' : '<a class="unslider-arrow prev"><span class="glyphicon glyphicon-chevron-left"></span></a>',
						'next' : '<a class="unslider-arrow next"><span class="glyphicon glyphicon-chevron-right"></span></a>'
					}
					
				}
			);
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



