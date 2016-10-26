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
    templateUrl: 'dashboardtemplate.html',
    controller: 'dashboardcontroller'
  });

  $showdownProvider.loadExtension('prettify');

})
.service('robindata', RobinData)
.controller('RRCtrl', RRController)
.controller('dashboardcontroller', DashboardController)
.controller('slidecontroller', SlideController)
.filter('markdown', function(){
  var converter = new showdown.Converter({extensions: ['prettify']});
  return function(md) { converter.makeHtml(md); };
})
.directive("slide", function () {
  function link(scope, element) {
    var iframe = document.getElementById('iframe');
    // var element0 = element[0];
    // element0.appendChild(iframe);
    var body = iframe.contentDocument.body;

    console.log(scope.pane);
    var converter = new showdown.Converter({extensions: ['prettify']});
    scope.$watch('pane', function () {
      $("#iframe").contents().find('body').html(converter.makeHtml(scope.pane));
    });
  }

  return {
    link: link,
    restrict: 'E',
    scope: false
  };
})
.directive("aspect", function ($window) {
  function link(scope, element, attr) {

    function resize() {
      var aspect = 16.0/9.0;

      var target = $(element[0]);
      var parent = $(target.parent().get(0));

      var maxWidth = parent.width();
      var maxHeight = parent.height();

      var width = maxWidth;
      var height = maxWidth / aspect;

      if (height > maxHeight) {
        width = maxHeight * aspect;
        height = maxHeight;
      }

      target.width(width);
      target.height(height);
    }
    resize();

    $($window).resize(resize);
    setTimeout(function() { resize();

    
    var converter = new showdown.Converter({extensions: ['prettify']});
    $("#iframe").contents().find('body').html(converter.makeHtml(scope.pane)); 

      scope.resized = true; scope.$apply(); resize();
    }, 1000);
  }

  return {
    link: link,
    scope: false
  };
});

function DialogController(dialog, submit) {
  return function($scope, $mdDialog) {
    $scope.dialog = dialog;
    $scope.hideDialog = $mdDialog.hide;
    $scope.submitDialog = function(){ if (submit()) $mdDialog.hide(); };
  }
}
