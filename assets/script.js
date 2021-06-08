
// var input = 1; //participants or any input parameter
 // 0.0 - 1

var badweather = false; //something we can set from another api



function boredAPI(){
var participants = $("#participant option:selected").val();
var maxprice = $("#maxprice option:selected").val();
  console.log(participants);
if (badweather === true){
    fetch('http://www.boredapi.com/api/activity?&participants='+participants+'&maxprice='+maxprice+'&type=education&type=relaxation&type=busywork&type=cooking&type=music&type=diy')
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
        $('p').text('this is an idea for an activity with '+participants+' participant(s). run the code again if you dont like it.');

    })
}else{
    fetch('http://www.boredapi.com/api/activity?&participants='+participants+'&maxprice='+maxprice)
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
}
$('#go').on('click',boredAPI)