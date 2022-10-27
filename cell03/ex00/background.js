document.getElementsByClassName("btn")[0].addEventListener ("click", function() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});