function getCommits(arg) {

	const http = new XMLHttpRequest();

	var commit_list = [];

	http.onreadystatechange = function() {

		// console.log(http.readyState);

		if (this.readyState == 4) {
			var text = JSON.parse(http.responseText);

			// console.log(text);

			for (var i = 0; i < text.length; i++){
				commit_list.push([text[i].commit.message, text[i].commit.author.date]);
				console.log([text[i].commit.message, text[i].commit.author.date]);
			}

			// console.log(commit_list);
			return commit_list;
		}
	}

	http.open("GET", arg, false);
	http.send();

	

}