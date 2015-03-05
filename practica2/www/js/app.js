var places = [
    { title: 'Pata Negra',
      address: 'Tamaulipas 30, Juan Escutia, Condesa, 06140',
      grade: '8',
      id: 0 },
    { title: 'Cantina Bar Montejo',
      address: 'Benjamín Franklin 261-A, Condesa',
      grade: '9',
      id: 1 },
    { title: 'Caradura',
      address: 'Nuevo León 73, Condesa, 06140',
      grade: '10',
      id: 2 },
    { title: 'El Ocho',
      address: 'México 111, Condesa, 06100',
      grade: '8',
      id: 3 },
    { title: 'La Bonita',
      address: 'Tamaulipas 104, Condesa',
      grade: '7',
      id: 4 },
    { title: 'Woko Taberna',
      address: 'Nuevo León 139-B, Condesa',
      grade: '8',
      id: 5 },
    { title: 'Cluny',
      address: 'Avenida de la Paz, Coyoacan',
      grade: '10',
      id: 6 },
];

angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.search', {
                url: "/search",
                views: {
                    'menuContent': {
                        templateUrl: "templates/search.html"
                    }
                }
            })

            .state('app.categories', {
                url: "/categories",
                views: {
                    'menuContent': {
                        templateUrl: "templates/categories.html",
                        controller: 'CategoriesCtrl'
                    }
                }
            })
            .state('app.bars', {
                url: "/bars",
                views: {
                    'menuContent': {
                        templateUrl: "templates/places.html",
                        controller: 'BarsCtrl'
                    }
                }
            })
            .state('app.restaurants', {
                url: "/restaurants",
                views: {
                    'menuContent': {
                        templateUrl: "templates/places.html",
                        controller: 'RestaurantsCtrl'
                    }
                }
            })
            .state('app.single', {
                url: "/places/:placeId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/place.html",
                        controller: 'PlaceCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/categories');
    });
