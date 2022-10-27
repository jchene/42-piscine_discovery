function getCookie(name){
	var data = decodeURIComponent(document.cookie).split(';');
	for (let i = 0; i < data.length; i++){
		while (data[i].charAt(0) == ' ')
			data[i] = data[i].substring(1);
		if (data[i].indexOf(name + "=") == 0)
			return data[i].substring(name.length + 1, data[i].length);
	}
	return "";
}

function addTask(msg){
	var newTask = document.createElement("div");
	newTask.classList.add("task");
	newTask.innerText = msg;
	var hr = document.createElement("hr");
	newTask.appendChild(hr);
	document.getElementsByClassName("list")[0].prepend(newTask);
	setCookie("list", joinData());
	newTask.addEventListener("click", function(){
		if (window.confirm("Do you want to discard this task?")){
			newTask.remove();
			setCookie("list", joinData());
		}
	});
}

function fillList(string){
	var words = string.split("`");
	console.log(words);
	for (let i = words.length - 1; i >= 0 ; i--){
		if (words[i] != '')
			addTask(words[i]);
	}
}

function joinData(){
	var dataSize = document.getElementsByClassName("task").length;
	var data = document.getElementsByClassName("task");
	var string = "";
	for (let i = 0; i < dataSize; i++){
		if (data[i].innerText != '')
			string = string + data[i].innerText + "`";
	}
	return string;
}

function setCookie(name, value){
	var d = new Date();
	d.setTime(d.getTime() + 2 * 86400000);
	var exp = "expires=" + d.toUTCString();
	document.cookie = name + "=" + value + ";" + exp + ";path=/";
}

window.onload = function() {
	var cookie = getCookie("list");
	if (cookie != "" && cookie != joinData()){
		fillList(cookie);
	}
	document.getElementsByClassName("addBtn")[0].addEventListener("click", function(){
		var msg = window.prompt("Enter task", "");
		if (!msg)
			return;
		addTask(msg);
	});
};
