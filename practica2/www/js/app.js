var places = [
    { name: 'Pata Negra',
      description: 'Un gran bar con un gran ambiente, excelente seleccion de cervezas',
      address: 'Tamaulipas 30, Juan Escutia, Condesa, 06140',
      grade: '8',
      id: 0 },
    { name: 'Cantina Bar Montejo',
      description: 'Un gran bar con un gran ambiente, excelente seleccion de cervezas',
      address: 'Benjamín Franklin 261-A, Condesa',
      grade: '9',
      id: 1 },
    { name: 'Caradura',
      description: 'Un gran bar con un gran ambiente, excelente seleccion de cervezas',
      address: 'Nuevo León 73, Condesa, 06140',
      grade: '10',
      id: 2 },
    { name: 'El Ocho',
      description: 'Un gran bar con un gran ambiente, excelente seleccion de cervezas',
      address: 'México 111, Condesa, 06100',
      grade: '8',
      id: 3 },
    { name: 'La Bonita',
      description: 'Un gran bar con un gran ambiente, excelente seleccion de cervezas',
      address: 'Tamaulipas 104, Condesa',
      grade: '7',
      id: 4 },
    { name: 'Woko Taberna',
      description: 'Un gran bar con un gran ambiente, excelente seleccion de cervezas',
      address: 'Nuevo León 139-B, Condesa',
      grade: '8',
      id: 5 },
    { name: 'Leonor',
      description: 'Un gran bar con un gran ambiente, excelente seleccion de cervezas',
      address: 'Nuevo León 163, Condesa, 06140',
      grade: '9',
      id: 6
    },
    { name: 'Wallace Whisky Bar',
      description: 'Un gran bar con un gran ambiente, excelente seleccion de cervezas',
      address: 'Tamaulipas 45, Condesa, 06140',
      grade: '9',
      id: 7
    },
    { name: 'Felina',
      description: 'Un gran bar con un gran ambiente, excelente seleccion de cervezas',
      address: 'Ometusco 87, Eje 3 Sur, Condesa, 06100',
      grade: '8',
      id: 8
    },
    { name: 'El Botellón',
      description: 'Un gran bar con un gran ambiente, excelente seleccion de cervezas',
      address: 'Tamaulipas 106, Condesa, 06100',
      grade: '7',
      id: 9
    },
    { name: 'King\'s Pub Condesa',
      description: 'Un gran bar con un gran ambiente, excelente seleccion de cervezas',
      address: 'Nuevo León 92, Condesa',
      grade: '7',
      id: 10
    },
    { name: 'Cluny',
      description: 'Un gran restaurante con comida francesa.',
      address: 'Avenida de la Paz, Coyoacan',
      grade: '10',
      id: 11 },
    { name: 'Rosetta',
      description: 'Comida italina de grandes vuelos',
      address: 'Colima 166, Roma',
      grade: '8',
      id: 12 },
    { name: 'Pujol',
      description: 'Comida mexicana de alta cocina',
      address: 'Francisco Petrarca, Polanco, 11550',
      grade: '10',
      id: 13 },
    { name: 'Murakmi',
      description: 'Un pedazo de Japon en México',
      address: 'Avenida de la Paz, Coyoacan',
      grade: '10',
      id: 14 },
    { name: 'Museo Nacional de Antropología',
      description: 'Unos de los recintos museograficos mas imporantes de México',
      address: 'Av Paseo de la Reforma y Calzada Gandhi S/N, Chapultepec',
      grade: '10',
      id: 15 },
    { name: 'Teatro Juan Ruíz de Alarcón',
      description: 'Uno de los teatros de la Zona Cultural de Ciudad Universitaria',
      address: 'Ciudad Universitaria, Coyoacan',
      grade: '10',
      id: 16 },
    { name: 'Cinepolis Diana',
      description: 'Cinepolis',
      address: 'Av Paseo de la Reforma 423',
      grade: '10',
      id: 17 }
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
            .state('app.museums', {
                url: "/museums",
                views: {
                    'menuContent': {
                        templateUrl: "templates/places.html",
                        controller: 'MuseumsCtrl'
                    }
                }
            })
            .state('app.theaters', {
                url: "/theaters",
                views: {
                    'menuContent': {
                        templateUrl: "templates/places.html",
                        controller: 'TheatersCtrl'
                    }
                }
            })
            .state('app.cinemas', {
                url: "/cinemas",
                views: {
                    'menuContent': {
                        templateUrl: "templates/places.html",
                        controller: 'CinemasCtrl'
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
