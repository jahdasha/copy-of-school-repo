$(document).ready(function(){
    // make new element function
    function makeElem(type, data, elemToappendTo){
        var childElem = $(type).text(data);
        elemToappendTo.append(childElem);
    }
    // display comic info function
    function displayComicInfo(){
        // grabbing user input
        var heroName = $('#heroSearch').val().trim();
        // Variables needed for the hash
        var ts = new Date().getTime(); 
        var PRIV_KEY = "9ced83e38521d6850703a1c54a18fea775a60964"
        var API_KEY = "bdcf4ef10cbcac4120f014ab0e020243";
        var hash = CryptoJS.MD5(ts+PRIV_KEY + API_KEY);
        // apikey for the end of the queryURL
        var apiKey = "bdcf4ef10cbcac4120f014ab0e020243";

        // queryURL to pass through the ajax call
        var queryURL = "https://gateway.marvel.com/v1/public/characters?name=" + heroName + "&ts=" + ts + "&hash=" + hash + "&apikey=" + apiKey;
        console.log(queryURL); // console log of queryURL

        // ajax call
        $.ajax({ queryURL: queryURL, method: "GET" }).done(function(data) {
	        // console.log(heroName); // console log of hero name
	        // console.log(data);  // console log of full data return

	        // drilling down to the needed data and place in a variable
	        var refinedResults = data.data.results[0];
	        console.log(refinedResults); // console log of comic result


	        // Useful results from refinded results
	        // 1. comics --  its an object, a resource list containing comics which feature this character.
	        // 2. description -- description of the comic, a short bio or description of the character.             
	        // 3. events --  its an object, a resource list of events in which this character appears.
	        // 4. name -- name of the comic, the name of the character.,
	        // 5. series --  its an object, a resource list of series in which this character appears.
	        // 6. stories --  its an object, a resource list of stories in which this character appears.
	        // 7. thumbnail  --  its an object, a representative image for this character.

	        // store the refined results in variables
	        var comicResults = data.data.results[0].comics.items; // comics object
	        var descriptionResults = data.data.results[0].description; // description item
	        var eventsResults = data.data.results[0].events.items; // events object
	        var nameResults = data.data.results[0].name; // name item
	        var seriesResults = data.data.results[0].series.items; // series object
	        var storiesResults = data.data.results[0].stories.items; // stories object
	        var thumbnailResultsPath = data.data.results[0].thumbnail.path; // thumbnail path item
	        var thumbnailResultsExtension = data.data.results[0].thumbnail.extension; // thumbnail extension item
	        var thumbnailResults = thumbnailResultsPath + "." +thumbnailResultsExtension; // thumbnail concatinated item

	        var comicDiv = $('<div class="comicDiv">');
	        makeElem("<p>", "Comic Info", comicDiv);
	        makeElem("<p>", nameResults, comicDiv);
	        makeElem("<p>", descriptionResults, comicDiv);
	        if (thumbnailResults != "N/A"){
	            var image = $("<img>").attr("src", thumbnailResults);
	            comicDiv.append(image);
	        }
	        $("comicsView").prepend(comicDiv);
    	});
    }


    $('#heroSubmit').on('click', function(){
        $('#comicsView').html("");
        displayComicInfo();
    });
});