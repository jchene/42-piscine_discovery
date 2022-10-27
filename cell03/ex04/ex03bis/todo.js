function addTask(msg){
	var newTask = $("<div>" + msg + "</div>").addClass("task");
	$("<hr>").appendTo(newTask);
	$(".list").prepend(newTask);
	Cookies.set("list", joinData());
	$(newTask).click(function(){
		if (window.confirm("Do you want to discard this task?")){
			newTask.remove();
			Cookies.set("list", joinData());
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
	var dataSize = $(".task").length;
	var data = $(".task");
	var string = "";
	for (let i = 0; i < dataSize; i++){
		if (data[i].innerText != '')
			string = string + data[i].innerText + "`";
	}
	return string;
}

$(document).ready(function(){
	var cookie = Cookies.get("list");
	if (cookie != undefined && cookie != joinData()){
		fillList(cookie);
	}
	$(".addBtn").click(function (){
		var msg = window.prompt("Enter task", "");
		if (!msg)
			return;
		addTask(msg);
	})
});
