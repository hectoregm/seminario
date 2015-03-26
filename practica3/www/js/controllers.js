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
    $scope.places = places.slice(11,15);
    $scope.haveMoreData = false;
  })

  .controller('FAQCtrl', function($scope) {
    $scope.faqs = faqItems;
  })

  .controller('VideoCtrl', function($scope, $stateParams) {
    $scope.faqItem = faqItems[$stateParams.videoId]
    $scope.title = $scope.faqItem.question
    $scope.active = false

    if (typeof cordova != 'undefined') {
      var so = cordova.plugins.screenorientation;

      $scope.$on("$ionicView.enter", function() {
        so.setOrientation('landscape')
      });

      $scope.$on("$ionicView.leave", function() {
        so.setOrientation('portrait')
      });
    }

    $scope.onTouch = function() {
      $scope.active = !$scope.active;
    };

    // Video
    var video = document.getElementById("video");

    // Buttons
    var playButton = document.getElementById("play-pause");

    // Sliders
    var seekBar = document.getElementById("seek-bar");
    var container = document.getElementById("video-container");


    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
      if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playButton.innerHTML = "Pause";
      } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        playButton.innerHTML = "Play";
      }
    });

    // Event listener for the seek bar
    seekBar.addEventListener("change", function() {
      // Calculate the new time
      var time = video.duration * (seekBar.value / 100);

      // Update the video time
      video.currentTime = time;
    });


    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;

      // Update the slider value
      seekBar.value = value;
    });

    // Pause the video when the seek handle is being dragged
    seekBar.addEventListener("mousedown", function() {
      video.pause();
    });

    // Play the video when the seek handle is dropped
    seekBar.addEventListener("mouseup", function() {
      video.play();
    });
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
