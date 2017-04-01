# liri-node-app

LIRI = Language Interpretation and Recognition Interface;

LIRI can find the info for a song using spotify's API, return the last 20 statuses from twitter using the twitter API, and show you the all sorts of information about any movie! (as long as it's in the OMDB of course)

To access the full functionality all you have to do is:
- using the CLI, navigate to the directory where liri.js is stored

- type in: 
	
		node liri.js [command] [parameter]

- In place of the [command] block, you can type in the action you would like LIRI to execute. (with out brackets)
	
	- The actions are:
		
		- my-tweets 
			- returns the last 20 statuses from your twitter account.
			- if you would like to change the account, you need to change the keys in the keys.js file

		- spotify-this-song [parameter]
			- searches Spotify for a song and returns it's information
			- in place of the [paramerter] block, you can type in which ever song you would like to search for

		- movie-this [parameter]
			- searches OMDB for a song and returns it's information
			- in place of the [parameter] block, you can type in the name of the movie you would like to search for

		- do-what-it-says
			- selects a random [command] and [parameter] from the text file random.txt


All of the actions performed by LIRI are logged in a text file called log.txt in the same folder as liri.js.