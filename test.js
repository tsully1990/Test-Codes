$(document).ready(function () {
    console.log("hi")
    var topics = [
        "mario", "luigi", "toad", "bowser", "peach", "yoshi", "donkey kong", "diddy kong",
        "pac-man", "koopa troopa", "wario", "waluigi", "link"
    ]
    console.log("hello")
    function populateButtons(arrayToUse, classToAddTo, areaToAddTo) {
        $(areaToAddTo).empty();
        for (var i = 0; i < arrayToUse.length; i++) {
            var a = $("<button>");
            a.addClass(classToAddTo);
            a.attr("data-name", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $("#button-use").append(a);

        }

    }
    console.log("herro")
    $(document).on("click", ".animals", function () {
        var type = $(this).attr("data-type");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response)
                results = response.data;
                for (var i = 0; i < results.length; i++);
                var topicsDiv = $("<div class=\"topics-item\">");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
            })
    });


})



//create an array holding button data

//create a function to create buttons
//run for loop through your array

//createa on-click for button (search button)

//make ajax call
//make .then response after data comes back

//for loop through results
//after for loop drill into object

//creat an image tag using jquery