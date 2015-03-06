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

    .controller('BarsCtrl', function($scope, $timeout) {
        $scope.title = "Bares";
        $scope.places = places.slice(0,11);
        $scope.haveMoreData = true;
        $scope.loadMore = function() {
            $timeout(function () {
                $scope.places = $scope.places.concat(places.slice(0,11));
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 2000);
        };
    })

    .controller('RestaurantsCtrl', function($scope) {
        $scope.title = "Restaurantes"
        $scope.places = places.slice(6,7);
        $scope.haveMoreData = false;
    })

    .controller('PlaceCtrl', function($scope, $stateParams, $timeout) {
        $scope.place = places[$stateParams.placeId]
        $scope.comments = comments.slice(0,6)
        $scope.haveMoreData = true;

        $scope.loadMore = function() {
            console.log("In loadMore")
            $timeout(function () {
                $scope.comments = $scope.comments.concat(comments.slice(0,6));
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 2000);
        };
    });
