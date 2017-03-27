const keys = require("./keys.js");

const consumerKey = keys.twitterKeys.consumer_key;
const consumerSecret = keys.twitterKeys.consumer_secret;
const accessKey = keys.twitterKeys.access_token_key;
const accessSecret = keys.twitterKeys.access_token_secret;

console.log(consumerKey);
console.log(consumerSecret);
console.log(accessKey);
console.log(accessSecret);


var command = process.argv[2];




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
	case default:
		
		break; 
}