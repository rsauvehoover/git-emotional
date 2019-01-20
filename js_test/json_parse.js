
console.log("running");

//globals for testing
var jobj;

var commits = [];

// var commits = new Set([]); 
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
      get_commit_list(branchlist, commits);	
    }
  }
  client.send();
  return;
}

//GET a list of commits in each branch
function get_commit_list(list, search) {
	var branch_heads = [];

	// console.log("Check 1");

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

	  		branch_heads.push(templist.sha);

	  		// console.log(commit_list);
  		}
  	}

  	client.send();
	}

	console.log(branch_heads);

	//get commits in each branch
	for (var i = 0; i < branch_heads.length; i++ ) {

		get_commits(branch_heads[i], search);

	}


	// var unique_commits = new Set(commits);

	commits.sort(compare);

	var k = commits.length;

	for (var i = 0; i < k; i++ ) {
		var j = i+1;

		// console.log("j=" + j);

		if (j >= k){
			break;
		}

		while (commits[i][1] == commits[j][1]){
			if (commits[i][0] == commits[j][0]){
				commits.splice(j,1);

				console.log("Deleted " + commits[j]);
				k--;
				// console.log(k);
				// console.log("k=" + k);
				
			}
			else {
				j++;
			}
		}
	}

	for (var i = 0; i < commits.length; i++ ) {
		console.log(commits[i]);
	}


}

function get_commits(sha, search) {

	query = search + "?per_page=100&sha=" + sha;

	console.log(query);

	var client = new XMLHttpRequest();
  client.open('GET', query, false);
  client.onreadystatechange = function() {
  	if (this.readyState == 4) {
  		var templist = JSON.parse(client.responseText);

  		// append commits to global list commit_list
  		for (var i = 0; i < templist.length; i++){
				commits.push([templist[i].commit.message, templist[i].commit.author.date]);
				// console.log([templist[i].commit.message, templist[i].commit.author.date]);
			}

  		// console.log(commit_list);
		}
	}

	client.send();
}


function print_object(arg) {

	console.log(arg);

}

function compare(a,b){
	if (a[1] < b[1]) return -1;
 	if (a[1] > b[1]) return 1;
 	return 0;
}

sentiment = new Sentimood();
