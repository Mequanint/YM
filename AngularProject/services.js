//Services

weatherApp.service('cityService',function(){
    
    this.city="New York, NY";
});

weatherApp.service('weatherService',function($resource){
    this.getWeather=function(city,days){
      var weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=d62cc0d7ae5d8f8bdc2bb8f48de30072",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
       
    return weatherAPI.get({q:city,cnt:days});  
        
    }  
});
     