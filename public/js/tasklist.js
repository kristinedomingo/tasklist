// ID for tasks, so each one is unique.
var count = 0;

// websocket
var socket = io ();

$(document).ready (function ()
{
  var taskList;
  var highPriorityDiv = $("#highPriority");
  var midPriorityDiv = $("#midPriority");
  var lowPriorityDiv = $("#lowPriority");

  // Upon clicking on add, get task value and priority, then emit data.
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
    if (!priority)
    {
      alert ("Select a priority!");
      return false;
    }

    // Send add task event to the websocket.
    socket.emit ("addTaskClick", {task: taskToAdd, priority: priority});
    return false;
  });

  // Once websocket sends confirm back, add task. 
  socket.on ("addTaskConfirm", function (data)
  {
    // Set priority.
    if (data.priority === "high") taskList = highPriorityDiv;
    else if (data.priority === "mid") taskList = midPriorityDiv;
    else if (data.priority === "low") taskList = lowPriorityDiv;
    else alert ("Something went wrong!");

    // Add the task to the list.
    taskList.append ('<div id="task' + count + '">[X] ' + data.task + '</div>');
    var task = $("#task" + count);

    // Handler for task deletion.
    task.on ("click", function ()
    {
      $(this).remove ();
    });

    count++;
  });

  socket.on ("connectionChange", function (data)
  {
    var connectionsDisplay = $("#connectionsDisplay").html(
      "Number of users connected: " + data);
  });
});