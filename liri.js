// Requires
const keys = require("./keys.js");
const Twitter = require("twitter");

// Input Variables
var command = process.argv[2];


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
		spotify();
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
 			console.log("-----------------------");
			console.log(name);
			console.log(text);
			console.log("=======================");
  		}  
	//console.log(tweets);  // The favorites. 
	//console.log(response);  // Raw response object. 
	});
};