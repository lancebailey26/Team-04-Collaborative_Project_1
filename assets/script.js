//Event listener for submit click
document.getElementById("submit").addEventListener("click", countdown);

//Countdown timer to display  successive user interactive pages based on weather and participant input
function countdown(event) {
    event.preventDefault();
    // var city = document.querySelector('#state').value;
    // if (city == null || city == " "){
    //     $('timer').addClass('hide;')
    //     $('#resultsbox').removeClass('hide');
    //      $('#weather1').text("you need to enter a location!")
    //      return
    // }else{
    $('#timer').removeClass('hide');
    $('#resultsbox').addClass('hide');
    var count = 4;
    // console.log("test");
    // console.log(count);
    var interval = setInterval(function () {
        var timerEl = document.getElementById("timer");
        timerEl.innerHTML = "Let the boredom dissappear in... " + --count;
        if (count == 0) {
            clearInterval(interval);
            $('h2').addClass('hide');
            $('#resultsbox').removeClass('hide');
        }
    }, 1000);
    boredAPI();
}

// Clears  existing weather & activity content
function clear() {
    $('#weather1').text('');
    $('#weather2').text('');
    $('#weather3').text('');
    $('#weather4').text('');
    $('#activity1').text('');
    $('#activity2').text('');
    $('#activity3').text('');
}
// The function below calls the weather API ;Depending upon the city's weather conditions lists suitable random activities from the BoredAPI
function boredAPI() {
    clear();
    var city = document.querySelector('#state').value;
    var apiKey = "6ca38b593072c5ff245976d803e5f35b";


    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial" + "&appid=" + apiKey)
        .then(function (response) {
            let data = response.json();
            if (response.status != 200) {
                $('#weather1').text("Invalid input, please try again")
            } else {
                return data;
            }
        })
        .then(function (data) {
            console.log(data)
            // var temperatureContainerEl = document.querySelector('#temperature-container');
            // var cityContainerEl = document.querySelector('#city-container');
            // var dateContainerEl = document.querySelector('#date-container');
            // var nameContainerEl = document.querySelector('#name-container');
            // var weatherDescEl=document.querySelector("#weather-description");
            var date = data.dt;
            var displayDate = moment.unix(date).format("MM/DD/YYYY");
            var citySearch = data.name;
            var temperature = data.main.temp;
            var weatherdesc = data.weather[0].main;



            $('#weather1').text(displayDate);
            $('#weather2').text(citySearch);
            $('#weather3').text("Temperature: " + Math.floor(temperature) + " °F");
            $('#weather4').text(weatherdesc);

            // conditional based on the areas weather and then set the inner html
            // to be the image from assets folder instead of word itself
            // future: could have a full page gif based on location weather (cloudy, rainy, thunderstorm, sun)

            var participants = $("#participants option:selected").val();
            // var badWeather = $('#weather4').text(); 
            // var maxprice = $("#maxprice option:selected").val();
            // console.log(participants);
            if (weatherdesc === "Rain" || weatherdesc === "Thunderstorm" || weatherdesc === "Drizzle" || weatherdesc === "Snow" || temperature < 50) {
                fetch('http://www.boredapi.com/api/activity?&participants=' + participants + '&type=education&type=relaxation&type=music&type=cooking')
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data)
                        var act = data.activity;
                        var participants = data.participants
                        var price = data.price;

                        $('#activity1').text("Activity: " + act);
                        $('#activity2').text("Price Scale: " + price + " (scale of 0 - 1)")
                        $('#activity3').text("Participants: " + participants);
                        $('#activity4').text("Complete the form again for more ideas!");


                    })
            } else {
                fetch('http://www.boredapi.com/api/activity?&participants=' + participants + '&type=recreational&type=diy&type=social&type=busywork')
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data)
                        var act = data.activity;
                        var participants = data.participants
                        var price = data.price;

                        $('#activity1').text("Activity: " + act);
                        $('#activity2').text("Price Scale: " + price + " (scale of 0 - 1)")
                        $('#activity3').text("Participants: " + participants);
                        $('#activity4').text("Complete the form again for more ideas!");

                    })
            }
        })
}





            // var cityButton = document.createElement('button');
            // cityButton.innerHTML = citySearch;

            //  weatherDescEl.innerHTML = weatherdesc;
            // dateContainerEl.innerHTML = displayDate;
            // nameContainerEl.innerHTML = citySearch;
            // temperatureContainerEl.innerHTML = "Temperature: " + temperature + "°F";
            // var weatherDisplay = $('#weather4').text();
            // var tempDisplay = $('#weather3').val();
            // if (weatherDisplay == "rain"){
            //     badWeather = true;
            //    }else{
            //      badWeather = false;
            //    }




        //if #weather4 !== rain || if #weather3 < 50
        //then badweather == false






// var participants = $("#participants option:selected").val();
// var badWeather = $('#weather4').text(); 
// // var maxprice = $("#maxprice option:selected").val();
//   console.log(participants);
// if (weatherdesc == "rain"){
//     fetch('http://www.boredapi.com/api/activity?&participants='+participants+'&type=education')
//     .then(function (response) {
//     return response.json();
//     })
//     .then(function(data){
//         console.log(data)
//         var act = data.activity;
//         var participants = data.participants
//         var price = data.price;
//         $('#activity1').text(act);
//         $('#activity2').text('as far as price, we rate this as a '+ price+' on a scale of 0 - 1')
//         $('#activity3').text('this is an idea for an activity with '+participants+' participant(s). run the code again if you dont like it.');

//     })
// }else if (weatherdesc !== "rain"){
//     fetch('http://www.boredapi.com/api/activity?&participants='+participants+'&type=recreational')
//     .then(function (response) {
//     return response.json();
//     })
//     .then(function(data){
//         console.log(data)
//         var act = data.activity;
//         var participants = data.participants
//         var price = data.price;
//         $('#activity1').text(act);
//         $('#activity2').text('as far as price, we rate this as a '+ price +' on a scale of 0 - 1')
//         $('#activity3').text(participants);

//     })
// }
// })
// }
// $('#submit').on('click',boredAPI)