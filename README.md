#iframe template
Dispatch an app via a single inline javascript script

There are two files `index.html` and `params.js`

**Params** may be passed into the parent page and still passed on into the iframe.

####index.html
This is the dummy host HTML page.
Place the script inline where you wish the app to appear.
You can pass params in the URL to your application too.

	<!DOCTYPE html>
	<html>
  		<head></head>
  		<body>
    		<script type="text/javascript" src="params.js"></script>
  		</body>
	</html>
	
####params.js
A doc write script that injects an iframe into the page at its script location. It has a URL parameter function included so that params can be pushed into the URL of the iframe. `HOT`

	// index
	index.html?id=6476872
	
	// params setup
	var id = getURLparam('id');
	
Pretty straight forward - even betetr to look at he code.
	
