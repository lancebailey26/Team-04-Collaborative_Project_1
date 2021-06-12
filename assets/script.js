//Event listener for submit click
document.getElementById("submit").addEventListener("click", countdown);
localStorage.setItem('searchCounter', 0);


//Countdown timer to display  successive user interactive pages based on weather and participant input
function countdown(event) {
    event.preventDefault();
    $('#timer').removeClass('hide');
    $('#resultsbox').addClass('hide');
    var count = 4;
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
    $('#activity4').text('');
    $('#activity5').text('');
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
            var date = data.dt;
            var displayDate = moment.unix(date).format("MM/DD/YYYY");
            var citySearch = data.name;
            var temperature = data.main.temp;
            var weatherdesc = data.weather[0].main;
            if(localStorage.getItem("searchCounter")===null){
                localStorage.setItem("searchCounter", 0)
            }
            var searchCount = parseInt(localStorage.getItem("searchCounter"));
            var plusOne = searchCount + 1;
            localStorage.setItem("searchCounter", plusOne);



            $('#weather1').text(displayDate);
            $('#weather2').text(citySearch);
            $('#weather3').text("Temperature: " + Math.floor(temperature) + " °F");
            $('#weather4').text(weatherdesc);

            // conditional based on the areas weather and then set the inner html
            // to be the image from assets folder instead of word itself
            // future: could have a full page gif based on location weather (cloudy, rainy, thunderstorm, sun)

            var participants = $("#participants option:selected").val();
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
                        $('#activity5').text("You've searched "+ localStorage.getItem('searchCounter') +" times. Are you bored yet?")

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
                        $('#activity5').text("You've searched "+plusOne+" times. Are you bored yet?")

                    })
            }
            }
        )
}