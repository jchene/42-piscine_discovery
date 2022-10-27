$(document).ready(function(){
	$(".addBtn").click(function (){
		var msg = window.prompt("Enter task", "");
		if (!msg)
			return;
		var newTask = $("<div>" + msg + "</div>").addClass("task");
		$("<hr>").appendTo(newTask);
		$(".list").prepend(newTask);
	})
	$(document).on("click", ".task", function(){
		if (window.confirm("Do you want to discard this task?"))
			$(this).remove();
	});
});
