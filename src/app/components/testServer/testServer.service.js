(function() {
  'use strict';

  angular
      .module('whitebridge')
      .service('testServer', testServer);

  /** @ngInject */
  function testServer(toastr) {
    var data = [
      {
        'title': 'AngularJS Developer',
        'description': 'Ready to make $30,000 USD while working for a fortune 500 company from the comfort of your home? Eager to join a network of the most talented remote workers in the world? If so, this role is for you. Work for Crossover, and you’ll earn the most competitive wages on the market, collaborate with the most skilled teams in your field, and work for the most elite companies in the world. Sound too good to be true? Take a closer look...',
        'qualifications': 
        [
          'At least four years of hands-on experience front-end web design, Bachelor’s Degree in Computer Science or related field',
          'General knowledge of back-end web development from a consumer perspective',
          'Excellent communication skills (in English)'
        ],
        'exp': '4',
        'salary': '$30,000'
      }
      
    ];

    this.getData = getData;
    this.postData = postData;

    function getData() {
      return data;
    }

    function postData(newData) {
      data.push(newData);
      return toastr.success("Data Saved");
    }
  }

})();
