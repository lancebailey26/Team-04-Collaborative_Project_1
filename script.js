

document.getElementById("submit").addEventListener("click", countdown())


function countdown()
{
    var count = 4;

    var interval = setInterval(function()
    {
        document.getElementById("timer").innerHTML = "Let the boredom dissappear in... " + -- count;

        if (count == 0)
            clearInterval(interval);

    }, 1000);
}