var slidemd;
var slideref;
var laststep = 0;

function SlideController($scope, $route, $routeParams, $location) {	
  var curslide = undefined;

  if (!slidemd || slideref != $routeParams.slideref) {
    $.get('md/'+$routeParams.slideref+'.md', function(data){
      slidemd = data.substring(2).split(/\n#\s/).map(function(a){return "# "+a;});
      setSlide($routeParams.slidenum || 0);
    });
  }

  window.slidekeypressed = function(ev){
    if (ev.keyCode == 39 || ev.keyCode == 34)
      increment();
    else if (ev.keyCode == 37 || ev.keyCode == 33)
      decrement();
  }

  $(document).keydown(window.slidekeypressed);

  function setSlide(slideidx) {
    // if (curslide !== undefined && (curslide === slideidx)) return;

    curslide = slideidx;

    curslide %= slidemd.length;
    curslide += slidemd.length;
    curslide %= slidemd.length;

    $scope.pane = slidemd[curslide];

    $route.updateParams({slidenum: curslide});


    if(!$scope.$$phase) {
      $scope.$apply();
      prettyPrint();
    } else {
      $scope.$$postDigest(function(){prettyPrint();});
    }

    var converter = new showdown.Converter({extensions: ['prettify']});
    $("#iframe").contents().find('#slide').html(converter.makeHtml($scope.pane)); 

  }
  function increment() {
    if (!Math.floor((new Date().getTime()-laststep)/100)) return;
    setSlide(curslide+1);
    laststep = new Date().getTime();
  }
  function decrement() {
    if (!Math.floor((new Date().getTime()-laststep)/100)) return;
    setSlide(curslide-1);
    laststep = new Date().getTime();
  }
  function scream() {
    console.log("ASFIOAHSDOIFHASOIDFHAISODFH");
  }
  $scope.scream = scream;
  $scope.setSlide = setSlide;
  $scope.increment = increment;
  $scope.decrement = decrement;
}