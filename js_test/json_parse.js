
console.log("running");

//globals for testing
var jobj;

var sample_git = "https://api.github.com/repos/learningequality/ka-lite/commits";

function http_get(arg) {
	var client = new XMLHttpRequest();
  client.open('GET', arg);
  client.onreadystatechange = function() {
    // console.log(client.responseText);
    parse_json(client.responseText);
  }
  client.send();
}



function parse_json(file) {
  jobj = JSON.parse(file);
}

function parse_repo(arg) {

	var search = "https://api.github.com/repos/" + arg + "/commits";
	console.log(search);
	http_get(search);
}

sentiment = new Sentimood();
