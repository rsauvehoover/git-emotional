

console.log("client code running");

const submitButton = document.getElementById("submitButton");
const inputBox = document.getElementById("urlInput");
submitButton.addEventListener('click', function(e) {
  console.log(inputBox.value);
});