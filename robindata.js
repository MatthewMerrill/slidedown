function RobinData() {
  var currentUser;

  this.userRobins = function(callback) {
    var database = firebase.database();
    var userId = firebase.auth().currentUser.uid;

    var userRobinsRef = firebase.database().ref('users/' + userId + '/robins');

    return firebase.database().ref('users/'+userId+'/robins').on('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  }

  this.updateRobins = function($scope) {
    $scope.robins = [{name:"ASDF",desc:"ZXCV"}]
    $scope.$apply();
  };

  this.groupRobins = function(callback) {

  }
}