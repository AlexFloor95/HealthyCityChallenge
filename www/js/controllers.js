angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
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

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { 
        title: 'Voetbaltoernooi AWC', id: 1, when: '20-06-2015 12:00', participants: '32/40',
        description: 'Voetbalclub s.v AWC heeft zijn velden vrijgegeven voor het organiseren van een Voetbaltoernooi, er wordt gespeeld met teams van 5 tegen 5.',
        location: 'AWC, De Wychert 1, 6603 AH Wijchen', coords:'51.80821/5.74813', owner:'Jeroen Peters'
    },
    { 
        title: 'Wandeltocht hoge veluwe AWC', id: 1, when: '21-06-2015 10:00', participants: '19/20',
        description: 'Een sportieve wandeling door het prachtige landschap van de hoge veluwe, waar de heide volop bloeit.',
        location: 'Dorpsstraat 2, 6731 AT Otterlo, Netherlands', coords:'52.10128/5.77197', owner:'Jeffrey Koers'
    },
    { 
        title: 'Voetbaltoernooi AWC', id: 1, when: '20-06-2015', participants: '32/40',
        description: 'Voetbalclub s.v AWC heeft zijn velden vrijgegeven voor het organiseren van een Voetbaltoernooi, er wordt gespeeld met teams van 5 tegen 5.',
        location: 'AWC, De Wychert 1, 6603 AH Wijchen', coords:'51.80821/5.74813', owner:'Alex Floor'
    },
    { 
        title: 'Voetbaltoernooi AWC', id: 1, when: '20-06-2015', participants: '32/40',
        description: 'Voetbalclub s.v AWC heeft zijn velden vrijgegeven voor het organiseren van een Voetbaltoernooi, er wordt gespeeld met teams van 5 tegen 5.',
        location: 'AWC, De Wychert 1, 6603 AH Wijchen', coords:'51.80821/5.74813', owner:'Jeroen Peters'
    },
    { 
        title: 'Voetbaltoernooi AWC', id: 1, when: '20-06-2015', participants: '32/40',
        description: 'Voetbalclub s.v AWC heeft zijn velden vrijgegeven voor het organiseren van een Voetbaltoernooi, er wordt gespeeld met teams van 5 tegen 5.',
        location: 'AWC, De Wychert 1, 6603 AH Wijchen', coords:'51.80821/5.74813', owner:'Jeffrey Koers'
    },
    { 
        title: 'Voetbaltoernooi AWC', id: 1, when: '20-06-2015', participants: '32/40',
        description: 'Voetbalclub s.v AWC heeft zijn velden vrijgegeven voor het organiseren van een Voetbaltoernooi, er wordt gespeeld met teams van 5 tegen 5.',
        location: 'AWC, De Wychert 1, 6603 AH Wijchen', coords:'51.80821/5.74813', owner:'Alex Floor'
    },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
