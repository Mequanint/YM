// Controllers

weatherApp.controller('homeController',['$scope','$log','cityService','$location',function($scope,$log,cityService,$location){
    $scope.city=cityService.city;
    $scope.$watch('city',function(){
        cityService.city=$scope.city;
    });
    $scope.submit=function(){
        $location.path("/forecast");
    };
    
    
}]);

weatherApp.controller('forecastController',['$scope','cityService','$resource','$routeParams','weatherService',function($scope,cityService,$resource,$routeParams,weatherService){
    $scope.city=cityService.city;
    
    $scope.days=$routeParams.days || '2';
    $scope.weatherResult=weatherService.getWeather($scope.city,$scope.days);
    
    $scope.converToFahrenheit=function(degk){
        return Math.round((1.8* (degk-273))+32);
    }
    
    $scope.convertToDate=function(dt){
        return new Date(dt*1000);
    }
    
}]);
