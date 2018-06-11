// business
function Task(name, time, place) {
  this.name = name;
  this.time = time;
  this.place = place;
}

Task.prototype.createTask = function() {
  return this.name + ' at ' + this.time + ' at/in ' + this.place;
}

// user
$(document).ready(function() {
  $('form#todolist').submit(function(event) {
    event.preventDefault();

    var inputTask = $('input#inputTask').val();
    var inputTime = $('input#inputTime').val();
    var inputPlace = $('input#inputPlace').val();

    var newTask = new Task(inputTask, inputTime, inputPlace);

    $('ul#todoTask').append('<li><span class="todoTask">' + newTask.createTask() + ' ' + '</span><button class="button btn-danger" type="button">Remove/Done</button></li>');

    $(".todoTask").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.name);
      $("#task-name").text(newTask.name);
      $("#time-of").text(newTask.time);
      $("#place-of").text(newTask.place);
    });

    $(".btn-danger").click(function() {
      $(this).parent().remove();
    })

    $('input#inputTask').val('');
    $('input#inputTime').val('');
    $('input#inputPlace').val('');
  });
});
