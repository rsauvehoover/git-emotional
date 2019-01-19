
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

	var search = "https://api.github.com/repos/" + arg; 
  var branches = search + "/branches"; 
  var commits = search + "/commits"; 
 
  // console.log(branches); 
  http_get(branches); 
 
   
 
  // http_get(commits); 
  // console.log(jobj[0].commit.message); 
}

sentiment = new Sentimood();
