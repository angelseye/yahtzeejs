# yahtzeejs
A javascript version of the popular dice game "Yahtzee" for the purpose of learning to use Node, Mocha, Chai, Sinon, and D3

To get started using this version of the popular dice game, simply follow the instructions below to setup a local environment where you can play.
You will need to make sure you have Node installed on your machine as this version of the game will use the http-server module to setup a simple 
web server capable of serving up the pages and running tests for this application.
You will also need to make sure you have installed Mocha, Chai, and Sinon if you are interested in doing further development and testing.

To start the HTTP Server, simply cd to where you cloned the git repository and type in "node node_modules/.bin/hs* -p 9000" (without quotes).
You may need to give administrator permissions using sudo. I chose port 9000 because the default of 8080 for http-server could conflict with something already
on your machine as its a popular port for many applications.

Once the machine is started, navigate your browser to "http://localhost:9000/game.html" and play the popular dice game.

Enjoy


## Testing with Mocha
If you would like to run the test suite, simply cd to where you cloned the git repository and type in "node node_modules/.bin/mocha test/" (without quotes).
Please be sure that any new gaming code have appropriate tests for all new and changed functionality.

