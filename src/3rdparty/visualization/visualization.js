define('visualization', ['angular'], function (angular) {
  angular
    .module('visualization', [])
    .service('visualizationApi', function () {
      return {
        getHello: function () {
          return 'hello';
        }
      }
    })
    .run(function () {
      console.log('visualization module running');
    });
});
