var button = document.createElement("button");
button.innerHTML = "Click me";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});