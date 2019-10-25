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
// testing for git push into local Robert branch
