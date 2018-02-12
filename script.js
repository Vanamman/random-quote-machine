var colors = [" #9b59b6", "#2980b9", "#27ae60", "#cb4335", "#17a589", "#b7950b", "#d35400"];

//change background color of page when button is clicked.
//make quote, tweet button, and new quote button mirror the page color

$(document).ready(function() {
    colors = colors[Math.floor(colors.length * Math.random())];
    $("body").css("background-color", colors);
    $('button').css("background-color", colors);
    $('#tweet').css("color", colors);
    $('#quote').css("color", colors);
    $('#author').css("color", colors);
});