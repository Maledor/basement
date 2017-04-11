(function() {
  angular.module('basement')
          .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
     $routeProvider
      .when('/', {
        templateUrl: 'html/views/index.html'
      })
      .when('/balooney', {
        templateUrl: 'html/views/balooney.html'
      })
      .when('/cylon', {
        templateUrl: 'html/views/cylon.html'
      })
      .otherwise({
        redirectTo: '/',
      });
    }
  }());
