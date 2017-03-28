// Requires
const keys = require("./keys.js");
const Twitter = require("twitter");
const spotify = require("spotify");
const request = require("request");

// Input Variables
var command = process.argv[2];
var param1 = process.argv[3];
var param2 = process.argv[4];


// Twitter Variables
const consumerKey = keys.twitterKeys.consumer_key;
const consumerSecret = keys.twitterKeys.consumer_secret;
const accessKey = keys.twitterKeys.access_token_key;
const accessSecret = keys.twitterKeys.access_token_secret;

var client = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token_key: accessKey,
  access_token_secret: accessSecret
});



switch (command) {
	case "my-tweets":
		myTweets();
		break;
	case "spotify-this-song":
		spotifyThis(param1);
		break;
	case "movie-this":
		movieThis(param1);
		break;
	case "do-what-it-says":
		random();
		break;
	default:
		console.log("nothing entered or there was a spelling error.");
		break;
}






function myTweets() {
	client.get('statuses/home_timeline', function(error, tweets, response) {
  		if(error) throw error;
  		for (var i = 0; i < tweets.length; i++) {
  			var name = tweets[i].user.name;
 			var text = tweets[i].text;

 			console.log("  ");
 			console.log("---------------------------------------------------------------");
			console.log(name);
			console.log(text);
			console.log("===============================================================");
  		}  
	//console.log(tweets);  // The favorites. 
	//console.log(response);  // Raw response object. 
	});
};



function spotifyThis(param1) {
	if (param1 === undefined){
		param1 = "The Sign Ace of Base";
	};
	spotify.search({ type: "track", query: param1 }, function(err, data) {
		//console.log(param1);
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    };
 
    //console.log(JSON.stringify(data, null, 2));

    var reference = data.tracks.items[0];
    var artist = reference.album.artists[0].name;
    var song = reference.name;
    var preview = reference.preview_url;
    var album = reference.album.name;

    console.log("-----------------------------------------------------------------------");
    console.log("Artist: ", artist);
    console.log("Song: ", song);
    console.log("Preview Link: ", preview);
    console.log("Album: ", album);
    console.log("=======================================================================");

});
};

function movieThis(param1) {

	if (param1 === undefined) {
		param1 = "Mr.Nobody";
	};

	var endPoint = "http://www.omdbapi.com/?";
	var movieQuery = "&t=" + param1;
	var typeQuery = "&type=movie";
	var responseFormat = "&r=json";

	var compiledUrl = endPoint + movieQuery + typeQuery + responseFormat;

	request( compiledUrl, function(error, response, body) {

		if (!error && response.statusCode === 200) {

    		//console.log(JSON.parse(body, null, 2));
    		var data = JSON.parse(body);
    		var rottenBaseURL = "https://www.rottentomatoes.com/m/"

    		var title = data.Title;
    		var year = data.Year;
    		var imdbRating = data.imdbRating;
    		var country = data.Country;
    		var language = data.Language;
    		var plot = data.Plot;
    		var actors = data.Actors;
    		var rottenRating = data.Ratings[1].Value;
    		var rottenURL = rottenBaseURL + title;

    		console.log("-------------------------------------------------------------------");
    		console.log("Title: ", title);
    		console.log("Year: ", year);
    		console.log("IMDB Rating: ", imdbRating);
    		console.log("Country(s): ", country);
    		console.log("Language(s): ", language);
    		console.log("Plot: ", plot);
    		console.log("Actors: ", actors);
    		console.log("Rotten Tomatoes Rating: ", rottenRating);
    		console.log("Rotten Tomatoes URL: ", rottenURL);
    		console.log("===================================================================");
 		}
	});
};