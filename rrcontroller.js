function RRController($scope, $mdDialog, $location, $routeParams) {

  firebase.auth().onAuthStateChanged(function(authData) {
    // authData can be null, but this handles both signin/signout cases.
    console.log('login changed:', authData, firebase.auth().currentUser);
    $scope.currentUser = authData;
    try {
    } catch(err) {
      console.error(err);
    }
  });

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');

  $scope.login = function(ev) {
    firebase.auth().signInWithRedirect(provider);
  };

  $scope.logout = function(ev) {
    firebase.auth().signOut().then(function() {
      console.log('client logged out');
    }, function(err) {
      console.error(err);
    });
  }

  $scope.fullscreen = function(ev) {
    var frame = document.getElementById("container");
    if (frame.requestFullscreen) {
      frame.requestFullscreen();
    } else if (frame.webkitRequestFullscreen) {
      frame.webkitRequestFullscreen();
    } else if (frame.mozRequestFullScreen) {
      frame.mozRequestFullScreen();
    } else if (frame.msRequestFullscreen) {
      frame.msRequestFullscreen();
    }
  };

  function onLogin(currentUser) {
    if (currentUser) {
      console.log(currentUser);
      $scope.currentUser = currentUser;
    } else {
      console.log("Client logged out");
      $scope.currentUser = null;
      $scope.robins = null;
    }
  }
};