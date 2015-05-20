var high = [];
var mid = [];
var low = [];

var count = 0;

function Task (task, priority, id)
{
	this.task = task;
	this.priority = priority;
	this.ID = "task" + count;
	this.HTML = $("<p id='" + this.ID + "'> [x] " + this.task + "</p>");
}

$(document).ready (function ()
{
	var highPriorityDiv = $("#highPriority");
	var midPriorityDiv = $("#midPriority");
	var lowPriorityDiv = $("#lowPriority");

	$("#addForm").submit (function ()
	{
		var taskToAdd = $("#taskInput").val ();		
		var priority = $("input[name=priority]:checked").val ();

		if (priority === "high")
		{
			high[high.length] = new Task (taskToAdd, priority, count);
			highPriorityDiv.html ("");
			high.forEach (function (task)
			{
				highPriorityDiv.append (task.HTML);

				$("#" + task.ID).on ("click", function ()
				{
					$(this).html ("");
				});

			});

		}
		else if (priority === "mid")
		{
			mid[mid.length] = new Task (taskToAdd, priority, count);
			midPriorityDiv.html ("");
			mid.forEach (function (task)
			{
				midPriorityDiv.append (task.HTML);

				$("#" + task.ID).on ("click", function ()
				{
					$(this).html ("");
				});
			});
		}
		else if (priority === "low")
		{
			low[low.length] = new Task (taskToAdd, priority, count);
			lowPriorityDiv.html ("");
			low.forEach (function (task)
			{
				lowPriorityDiv.append (task.HTML);

				$("#" + task.ID).on ("click", function ()
				{
					$(this).html ("");
				});
			});
		}	
		else
		{
			alert ("Select a priority!");
		}

		count++;
		return false;
	});
});