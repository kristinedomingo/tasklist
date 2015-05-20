var count = 0;

$(document).ready(function()
{
  var taskList;
  var task;
  var highPriorityDiv = $("#highPriority");
  var midPriorityDiv = $("#midPriority");
  var lowPriorityDiv = $("#lowPriority");

  $("#add").on("click", function()
  {
    var taskToAdd = $("#taskInput").val();      
    var priority = $("input[name=priority]:checked").val();

    if(priority === "high")
    {
      taskList = highPriorityDiv;
    }
    else if(priority === "mid")
    {
      taskList = midPriorityDiv
    }
    else if(priority === "low")
    {
      taskList = lowPriorityDiv;
    }   
    else
    {
      alert("Select a priority!");
      return false;
    }

    taskList.append('<div id="task' + count + '">[X] ' + taskToAdd + '</div>');
    task = $("#task" + count);

    task.on("click", function()
    {
      $(this).remove();
    });

    count++;
    return false;
  });
});