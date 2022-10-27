window.onload = function() {
	document.getElementsByClassName("addBtn")[0].addEventListener("click", function(){
		var msg = window.prompt("Enter task", "");
		if (!msg)
			return;
		var newTask = document.createElement("div");
		newTask.classList.add("task");
		newTask.innerText = msg;
		newTask.append(document.createElement("hr"));
		document.getElementsByClassName("list")[0].prepend(newTask);
		newTask.addEventListener("click", function(){
			if (window.confirm("Do you want to discard this task?"))
				newTask.remove();
		});
	});
};