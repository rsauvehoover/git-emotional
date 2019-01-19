
console.log("running");

//globals for testing
var jobj;



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

