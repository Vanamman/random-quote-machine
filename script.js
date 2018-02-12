var colors = [" #9b59b6", "#2980b9", "#27ae60", "#cb4335", "#17a589", "#b7950b", "#d35400"];



function parseQuote(response) 
{
    console.log(response);
    $("#quote").text(response.quoteText);
    $("#author").text(response.quoteAuthor);
}

$(document).ready(function() 
{

    function getQuote() 
    {
        $.ajax({
            url: "http://.api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote",
            method: 'GET',
            dataType: "jsonp",
        });
    }
    getQuote();
    
    function colorChange() 
    {
        var color = colors[Math.floor(colors.length * Math.random())];
        $("body").css("background-color", color);
        $('button').css("background-color", color);
        $('#tweet').css("color", color);
        $('#quote').css("color", color);
        $('#author').css("color", color);
    }
    colorChange();

    $('button').click(function() 
    {
        getQuote();
        colorChange();
    });
});