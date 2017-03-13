// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.getWeather = function(city, days, appID) {
        
<<<<<<< HEAD
        var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
=======
        var weatherAPI = $resource("//api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
>>>>>>> origin/master

        return weatherAPI.get({q: city, cnt: days, APPID: appID});
    }
}]);
