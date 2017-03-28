// Requires
const keys = require("./keys.js");
const Twitter = require("twitter");
const spotify = require('spotify');

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
		spotifyThis(param1,param2);
		break;
	case "movie-this":
		movie();
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
	}
	spotify.search({ type: "track", query: param1 }, function(err, data) {
		//console.log(param1);
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
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

 
	// The song's name
	// A preview link of the song from Spotify
	// The album that the song is from
});
}