angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('CategoriesCtrl', function($scope) {
        $scope.categories = [
            { title: 'Bares', id: 1, path: 'bars' },
            { title: 'Restaurantes', id: 2, path: 'restaurants' },
            { title: 'Museos', id: 3, path: 'museums' },
            { title: 'Teatros', id: 4, path: 'theaters' },
            { title: 'Cines', id: 5, path: 'cinemas' },
        ];
    })

    .controller('BarsCtrl', function($scope) {
        $scope.title = "Bares"
        $scope.places = [
            { title: 'Pata Negra',
              address: 'Tamaulipas 30, Juan Escutia, Condesa, 06140',
              grade: '8',
              id: 1 },
            { title: 'Cantina Bar Montejo',
              address: 'Benjamín Franklin 261-A, Condesa',
              grade: '9',
              id: 2 },
            { title: 'Caradura',
              address: 'Nuevo León 73, Condesa, 06140',
              grade: '10',
              id: 3 },
            { title: 'El Ocho',
              address: 'México 111, Condesa, 06100',
              grade: '8',
              id: 4 },
            { title: 'La Bonita',
              address: 'Tamaulipas 104, Condesa',
              grade: '7',
              id: 5 },
            { title: 'Woko Taberna',
              address: 'Nuevo León 139-B, Condesa',
              grade: '8',
              id: 6 }
        ];
    })

    .controller('RestaurantsCtrl', function($scope) {
        $scope.title = "Restaurantes"
        $scope.places = [
            { title: 'Cluny', id: 1 },
        ];
    })

    .controller('PlaceCtrl', function($scope, $stateParams) {
    });
