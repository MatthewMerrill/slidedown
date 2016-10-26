function DashboardController($scope, $http) {	
  var curslide = undefined;

  $http({
    method: 'GET',
    url: '/md/mdlist.json'
  }).then(function(res){
    $scope.mdlist = res.data;
  })
  
}