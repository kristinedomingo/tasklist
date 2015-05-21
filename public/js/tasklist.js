// ID for tasks, so each one is unique.
var count = 0;

$(document).ready (function ()
{
  var taskList;
  var task;
  var highPriorityDiv = $("#highPriority");
  var midPriorityDiv = $("#midPriority");
  var lowPriorityDiv = $("#lowPriority");

  // Begin handler for clicking "add"
  $("#add").on ("click", function ()
  {
    // Get the task to add. If empty, prompt user.
    var taskToAdd = $("#taskInput").val ();
    if (taskToAdd.length === 0)
    {
      alert ("Please enter in a task!");
      return false;
    }

    // Get the priority selected. If none selected, prompt user.
    var priority = $("input[name=priority]:checked").val ();
    if (priority === "high") taskList = highPriorityDiv;
    else if (priority === "mid") taskList = midPriorityDiv;
    else if (priority === "low") taskList = lowPriorityDiv;
    else
    {
      alert ("Select a priority!");
      return false;
    }

    // Add the task to the list.
    taskList.append ('<div id="task' + count + '">[X] ' + taskToAdd + '</div>');
    task = $("#task" + count);

    // Handler for task deletion.
    task.on ("click", function ()
    {
      $(this).remove ();
    });

    count++;
    return false;
  });
});