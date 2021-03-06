angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives'])
.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  //Retorna a rua mais próxima
  $rootScope.getLocation = function(callBack){
    navigator.geolocation.getCurrentPosition(function (pos) {
      
      var myLocation = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      var directionsService = new google.maps.DirectionsService();

      directionsService.route({
        origin: myLocation, 
        destination: myLocation, 
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      }, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK)
        {
          callBack(response.routes[0].legs[0].start_location);
        } else {
          callBack(homeLatlng);
        }
      });
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  }
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
      }
    }
  });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/map');
});

var angularModule = angular.module('starter.controllers', ['ionic']); 