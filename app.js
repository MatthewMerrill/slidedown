// Initialize Firebase
var config = {
  apiKey: "AIzaSyAlztadeMp33clCIrYd7wmJEYzeX65BYWU",
  authDomain: "roundrobin-927af.firebaseapp.com",
  databaseURL: "https://roundrobin-927af.firebaseio.com",
  storageBucket: "roundrobin-927af.appspot.com",
  messagingSenderId: "1041277055764"
};
firebase.initializeApp(config);

angular
.module('RRApp', ['ngMaterial', 'ngSanitize', 'ng-showdown', 'ngRoute'])
.config(function($mdThemingProvider, $routeProvider, $showdownProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue');
  
  $routeProvider
  .when('/:slideref', {
    controller: 'slidecontroller',
    templateUrl: 'presenttemplate.html',
    reloadOnSearch: false
  })
  .otherwise({
    template: '' +
      '<p >:)</p>',
    controller: SlideController
  });

  $showdownProvider.loadExtension('prettify');

})
.service('robindata', RobinData)
.controller('RRCtrl', RRController)
.controller('slidecontroller', SlideController)
.filter('markdown', function(){
  var converter = new showdown.Converter({extensions: ['prettify']});
  return converter.makeHtml;
})

function DialogController(dialog, submit) {
  return function($scope, $mdDialog) {
    $scope.dialog = dialog;
    $scope.hideDialog = $mdDialog.hide;
    $scope.submitDialog = function(){ if (submit()) $mdDialog.hide(); };
  }
}
