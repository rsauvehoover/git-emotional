
console.log("running");

//globals for testing
var jobj;

// var sample_git = "https://api.github.com/repos/learningequality/ka-lite/commits";

// function http_get(arg) {
// 	var client = new XMLHttpRequest();
//   client.open('GET', arg);
//   client.onreadystatechange = function() {
//     // console.log(client.responseText);
//     parse_json(client.responseText);
//   }
//   client.send();
// }



// function parse_json(file) {
//   jobj = JSON.parse(file);
// }

function parse_repo(arg) {

	var search = "https://api.github.com/repos/" + arg; 
  var branches = search + "/branches"; 
  var commits = search + "/commits"; 
  var branchlist;
  var client = new XMLHttpRequest();

  client.open('GET', branches);
  client.onreadystatechange = function() {
  	// console.log(this.readyState);

    if (this.readyState == 4) {
      branchlist = JSON.parse(client.responseText);
      get_commits(branchlist, commits);	
    }
  }
  client.send();
  return;
}

//GET a list of commits in each branch
function get_commits(list, search) {
	var commit_list = [];

	console.log("Check 1");

	for (var i = 0; i < list.length; i++) {
		branch_commits = search + "/" + list[i].name;
		console.log(branch_commits);

	  // call for commits
	  var client = new XMLHttpRequest();
	  client.open('GET', branch_commits, false);
	  client.onreadystatechange = function() {
	  	if (this.readyState == 4) {
	  		var templist = JSON.parse(client.responseText);

	  		// console.log(templist.commit.message);

	  		commit_list.push(templist.commit.message);

	  		// console.log(commit_list);
  		}
  	}

  	client.send();
	}

	console.log(commit_list);
}

sentiment = new Sentimood();
