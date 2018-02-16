var colors = [
	" #9b59b6",
	"#2980b9",
	"#27ae60",
	"#cb4335",
	"#17a589",
	"#b7950b",
	"#d35400"
];

$(document).ready(function() {
	var quote = "";
	var author = "";

	function getQuote() {
		$.ajax({
			url: "https://random-quote-generator.herokuapp.com/api/quotes/random",
			dataType: "json",
			success: function(results) {
				console.log(results);
				$("#quote").text(results.quote);
				$("#author").text(results.author);
				quote = results.quote;
				author = results.author;
				{
					$("#tweet").attr(
						"href",
						"https://twitter.com/intent/tweet?text=" +
							encodeURIComponent('"' + quote + '" - ' + author)
					);
				}
			}
		});
	}

	function colorChange() {
		var color = colors[Math.floor(colors.length * Math.random())];
		$("body").css("background-color", color);
		$("button").css("background-color", color);
		$("#tweet").css("color", color);
		$("#quote").css("color", color);
		$("#author").css("color", color);
	}

	$("button").click(function() {
		getQuote();
		colorChange();
	});

	colorChange();
	getQuote();
});
