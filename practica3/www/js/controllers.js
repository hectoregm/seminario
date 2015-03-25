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
      console.log("Real Touch");
      $scope.active = !$scope.active;
      console.log($scope.active);
    };

    // Video
    var video = document.getElementById("video");

    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");

    // Sliders
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");

    var container = document.getElementById("video-container")

    container.addEventListener("click", function() {
      console.log("Touch");
    })


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


    // Event listener for the mute button
    muteButton.addEventListener("click", function() {
      if (video.muted == false) {
        // Mute the video
        video.muted = true;

        // Update the button text
        muteButton.innerHTML = "Unmute";
      } else {
        // Unmute the video
        video.muted = false;

        // Update the button text
        muteButton.innerHTML = "Mute";
      }
    });


    // Event listener for the full-screen button
    fullScreenButton.addEventListener("click", function() {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Chrome and Safari
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

    // Event listener for the volume bar
    volumeBar.addEventListener("change", function() {
      // Update the video volume
      video.volume = volumeBar.value;
    });
  })

  .controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

  .controller('PlaylistCtrl', function($scope, $stateParams) {
  });
