# liri-node-app

LIRI = Language Interpretation and Recognition Interface;

LIRI can find the info for a song using spotify's API, return the last 20 statuses from twitter using the twitter API, and show you the all sorts of information about any movie! (as long as it's in the OMDB of course)

To access the full functionality all you have to do is:
- using the CLI, navigate to the directory where liri.js is stored

- type in: 
	
		node liri.js [command] [parameter]

- In place of the [command] block, you can type in the action you would like LIRI to execute.
	
	- The actions are:
		
		- my-tweets 
			- returns the last 20 statuses from your twitter account.

		- spotify-this-song [parameter]
			- searches Spotify for a song and returns it's information

		- movie-this [parameter]
			- 