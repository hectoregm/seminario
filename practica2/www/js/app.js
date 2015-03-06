var places = [
    { name: 'Pata Negra',
      address: 'Tamaulipas 30, Juan Escutia, Condesa, 06140',
      grade: '8',
      id: 0 },
    { name: 'Cantina Bar Montejo',
      address: 'Benjamín Franklin 261-A, Condesa',
      grade: '9',
      id: 1 },
    { name: 'Caradura',
      address: 'Nuevo León 73, Condesa, 06140',
      grade: '10',
      id: 2 },
    { name: 'El Ocho',
      address: 'México 111, Condesa, 06100',
      grade: '8',
      id: 3 },
    { name: 'La Bonita',
      address: 'Tamaulipas 104, Condesa',
      grade: '7',
      id: 4 },
    { name: 'Woko Taberna',
      address: 'Nuevo León 139-B, Condesa',
      grade: '8',
      id: 5 },
    { name: 'Leonor',
      address: 'Nuevo León 163, Condesa, 06140',
      grade: '9',
      id: 6
    },
    { name: 'Wallace Whisky Bar',
      address: 'Tamaulipas 45, Condesa, 06140',
      grade: '9',
      id: 7
    },
    { name: 'Felina',
      address: 'Ometusco 87, Eje 3 Sur, Condesa, 06100',
      grade: '8',
      id: 8
    },
    { name: 'El Botellón',
      address: 'Tamaulipas 106, Condesa, 06100',
      grade: '7',
      id: 9
    },
    { name: 'King\'s Pub Condesa',
      address: 'Nuevo León 92, Condesa',
      grade: '7',
      id: 10
    },
    { name: 'Cluny',
      address: 'Avenida de la Paz, Coyoacan',
      grade: '10',
      id: 11 },
];

var comments = [
    { username: "juan",
      text: "Me encanta este lugar.",
    },
    { username: "pedro32",
      text: "Buena musica y muy buen ambiente",
    },
    { username: "legolas",
      text: "Excelente, espero volver muy pronto",
    },
    { username: "gimli",
      text: "Me encanta la comida es muy buena",
    },
    { username: "foobar",
      text: "Muy buen servicio, siempre atentos y rapidos",
    }
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
