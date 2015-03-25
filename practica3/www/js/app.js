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

      .state('app.landing', {
        url: "/landing",
        views: {
          'menuContent': {
            templateUrl: "templates/landing.html"
          }
        }
      })

      .state('app.landing-help', {
        url: "/landing/help",
        views: {
          'menuContent': {
            templateUrl: "templates/help.html",
            controller: 'HelpCtrl'
          }
        }
      })

      .state('app.login', {
        url: "/login",
        views: {
          'menuContent': {
            templateUrl: "templates/login.html",
          }
        }
      })

      .state('app.video', {
        url: "/video",
        views: {
          'menuContent': {
            templateUrl: "templates/video.html",
            controller: 'VideoCtrl'
          }
        }
      })

      .state('app.search', {
        url: "/search",
        views: {
          'menuContent': {
            templateUrl: "templates/search.html"
          }
        }
      })

      .state('app.browse', {
        url: "/browse",
        views: {
          'menuContent': {
            templateUrl: "templates/browse.html"
          }
        }
      })
      .state('app.playlists', {
        url: "/playlists",
        views: {
          'menuContent': {
            templateUrl: "templates/playlists.html",
            controller: 'PlaylistsCtrl'
          }
        }
      })

      .state('app.single', {
        url: "/playlists/:playlistId",
        views: {
          'menuContent': {
            templateUrl: "templates/playlist.html",
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/landing');
  });
