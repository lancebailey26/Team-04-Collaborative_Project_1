var input = 1; //participants or any input parameter
var maxprice = 1; // 0.0 - 1

var badweather = false; //something we can set from another api

if (badweather === true){
    fetch('http://www.boredapi.com/api/activity?&participants='+input+'&maxprice='+maxprice+'&type=education&type=relaxation&type=busywork&type=cooking&type=music&type=diy')
    .then(function (response) {
    return response.json();
    })
    .then(function(data){
        console.log(data)
        var act = data.activity;
        var participants = data.participants
        var price = data.price;
        $('h3').text(act);
        $('h4').text('as far as price, we rate this as a '+ price+' on a scale of 0 - 1')
        $('p').text(participants);

    })
    
}
if (badweather===false){
fetch('http://www.boredapi.com/api/activity?&participants='+input+'&type=recreational&type=diy')
    .then(function (response) {
    return response.json();
    })
    .then(function(data){
        console.log(data)
        var act = data.activity;
        var participants = data.participants
        var price = data.price;
        $('h3').text(act);
        $('h4').text('as far as price, we rate this as a '+ price+' on a scale of 0 - 1')
        $('p').text(participants);

    })
}
