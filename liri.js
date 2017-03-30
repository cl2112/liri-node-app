// Requires
const keys = require("./keys.js");
const Twitter = require("twitter");
const spotify = require("spotify");
const request = require("request");
const fs = require("fs");

// Input Variables
var command = process.argv[2];

var totalString = "";

var param1;

if (process.argv[3] !== undefined){
	for ( var i = 3; i < process.argv.length; i++ ) {
		if ( i === process.argv.length - 1) {
			totalString += process.argv[i];
		} else {
			totalString += process.argv[i] + " ";
		};
	};
	param1 = totalString.replace(/ /g, "-");
} else {
	param1 = "noInput";
};





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


function parseCommand() {

	logToText("Entered Command: " + command);
	logToText("Parameter: " + param1);

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

			logToText("  ");
			logToText("---------------------------------------------------------------");
			logToText(name);
			logToText(text);
			logToText("===============================================================");
  		}  
	});
};



function spotifyThis(param1) {
	if (param1 == "noInput"){
		param1 = "The Sign Ace of Base";
	};
	spotify.search({ type: "track", query: param1 }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    };
 

    var reference = data.tracks.items[0];
    var artist = reference.album.artists[0].name;
    var song = reference.name;
    var preview = reference.preview_url;
    var album = reference.album.name;

    console.log("-----------------------------------------------------------------------");
    console.log("Artist: " + artist);
    console.log("Song: " + song);
    console.log("Preview Link: " + preview);
    console.log("Album: " + album);
    console.log("=======================================================================");

    logToText("-----------------------------------------------------------------------");
    logToText("Artist: " + artist);
    logToText("Song: " + song);
    logToText("Preview Link: " + preview);
    logToText("Album: " + album);
    logToText("=======================================================================");

});
};

function movieThis(param1) {

	console.log("before",param1);

	if (param1 == "noInput") {
		param1 = "Mr.-Nobody";
	};

	console.log("after",param1);

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
    		var parsedTitle = title.replace(/ /g, "_");
    		var rottenURL = rottenBaseURL + parsedTitle;

    		console.log("-------------------------------------------------------------------");
    		console.log("Title: " + title);
    		console.log("Year: " + year);
    		console.log("IMDB Rating: " + imdbRating);
    		console.log("Country(s): " + country);
    		console.log("Language(s): " + language);
    		console.log("Plot: " + plot);
    		console.log("Actors: " + actors);
    		console.log("Rotten Tomatoes Rating: " + rottenRating);
    		console.log("Rotten Tomatoes URL: " + rottenURL);
    		console.log("===================================================================");

    		logToText("-------------------------------------------------------------------");
    		logToText("Title: " + title);
    		logToText("Year: " + year);
    		logToText("IMDB Rating: " + imdbRating);
    		logToText("Country(s): " + country);
    		logToText("Language(s): " + language);
    		logToText("Plot: " + plot);
    		logToText("Actors: " + actors);
    		logToText("Rotten Tomatoes Rating: " + rottenRating);
    		logToText("Rotten Tomatoes URL: " + rottenURL);
    		logToText("===================================================================");
 		}
	});
};

function random() {
	fs.readFile("random.txt", "utf8", function(err, data){
		if (err) throw err;

		textInputArray = data.split(",");
		
		command = textInputArray[0];
		param1 = textInputArray[1];

		parseCommand();
	});
}	


function logToText(message) {
	fs.appendFileSync("log.txt", message + "\n", "utf8", function (err) {
		if (err) throw err;
	});
};




parseCommand();
