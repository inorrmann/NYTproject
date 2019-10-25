 Michael
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=wt46tRae2IlBCuqzk6TDVkNTV4GfblUz";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response.response.docs[0]);
    

// results will go into an empty ol with the id  #articleDisplay
// var li1 = $("<li>").text("" + ); //puts a line item with a specified search results detail. Looks like name of article and author


});

var search = "";
var numRecs = 0;
var startYr = "";
var endYr = "";

// Getting search parameters
function selectParams() {
  $("#searchBtn").on("click", function() {
    // event.preventDefault();
    search = $("#search").val().trim();
    numRecs = $("#numRecs").val();
    startYr = $("#startYr").val().trim();
    endYr = $("#endYr").val().trim();
    console.log(search);
    console.log(numRecs);
    console.log(startYr);
    console.log(endYr);
  });
}

selectParams();

//  https://api.nytimes.com/svc/search/v2/articlesearch.json?q={query}&api-key=wt46tRae2IlBCuqzk6TDVkNTV4GfblUz

// testing for git push
 master
