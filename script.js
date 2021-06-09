// var startButton = document.querySelector("#submit");
// startButton.addEventListener('click', countdown);

document.getElementById("submit").addEventListener("click", countdown);


function countdown(event)
{
    event.preventDefault();
    var count = 4;
    console.log("test");
    console.log(count);
    var interval = setInterval(function()
    {
        document.getElementById("timer").innerHTML = "Let the boredom dissappear in... " + -- count;

        if (count == 0)
            clearInterval(interval);

    }, 1000);
}