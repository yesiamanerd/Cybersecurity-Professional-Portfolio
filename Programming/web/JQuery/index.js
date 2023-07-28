

$(document).on("keypress", function(event) {
    $("h1").text(event.key);
});

$("button").on("click", function() {
    $("h1").css("font-size", "50px");
    $("h1").css("color", "purple");
});
