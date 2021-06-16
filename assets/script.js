
//Event listener for submit click

document.getElementById("submit").addEventListener("click", countdown);
//localstorage define
localStorage.setItem('searchCounter', 0);


//JS2
//Countdown timer to display  successive user interactive pages based on weather and participant input

function countdown(event) {
    event.preventDefault();
    $('#resultsbox').addClass('hide');
    $('#timer').removeClass('hide');
 
    // ADD HIDE CLASS TO HTML NOT JUST JAVASCRIPT
    // want everything to do with the results box to be hidden before the submit is clicked
  
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
      //if loclastorage doesnt exist, make it, each time this function is ran, add 1 to the total.
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

            var participants = $("#participants option:selected").val();
            if (weatherdesc === "Rain" || weatherdesc === "Thunderstorm" || weatherdesc === "Drizzle" || weatherdesc === "Snow" || temperature < 50) {
                fetch('https://www.boredapi.com/api/activity?&participants=' + participants + '&type=education&type=relaxation&type=music&type=cooking')
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data)
                        var act = data.activity;
                        var participants = data.participants
                        var price = data.price;
                        if (price === 0){
                            var priceDisplay = "Free"
                        }
                        if (price > 0 && price <= 0.33){
                            var priceDisplay = "$"
                        }
                        if (price > 0.33 && price <= 0.66){
                            var priceDisplay = "$$"
                        }
                        if (price > 0.66 && price <= 1){
                            var priceDisplay = "$$$"
                        }

                        $('#activity1').text("Activity: " + act);
                        $('#activity2').text("Price: " +priceDisplay)
                        $('#activity3').text("Participants: " + participants);
                        $('#activity4').text("Complete the form again for more ideas!");
                        $('#activity5').text("You've searched "+ localStorage.getItem('searchCounter') +" times. Are you bored yet?")

                    })
            } else {
                fetch('https://www.boredapi.com/api/activity?&participants=' + participants + '&type=recreational&type=diy&type=social&type=busywork')
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data)
                        var act = data.activity;
                        var participants = data.participants
                        var price = data.price;
                         
                        if (price === 0){
                            var priceDisplay = "Free"
                        }
                        if (price > 0 && price <= 0.33){
                            var priceDisplay = "$"
                        }
                        if (price > 0.33 && price <= 0.66){
                            var priceDisplay = "$$"
                        }
                        if (price > 0.66 && price <= 1){
                            var priceDisplay = "$$$"
                        }

                        $('#activity1').text("Activity: " + act);
                        $('#activity2').text("Price: " +priceDisplay)
                        $('#activity3').text("Participants: " + participants);
                        $('#activity4').text("Complete the form again for more ideas!");
                        $('#activity5').text("You've searched "+plusOne+" times. Are you bored yet?")

                    })
            }
            }
        )
}
