var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=wt46tRae2IlBCuqzk6TDVkNTV4GfblUz";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response.response.docs[0]);
    

// results will go into an empty ol with the id  #articleDisplay
// var li1 = $("<li>").text("" + ); //puts a line item with a specified search results detail. Looks like name of article and author


});