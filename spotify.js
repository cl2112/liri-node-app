const spotify = require("spotify");

var param1 = process.argv[2];

if (param1 === "undefined") {
	param1 = "the+sign";
}

spotify.search({ type: 'track', query: param1 }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 	
 	console.log(data);
    // Do something with 'data' 
});