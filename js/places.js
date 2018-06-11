// business

function Place(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

Place.prototype.displayProperties = function() {
  return this.location + ', ' + this.landmark + ', ' + this.time + ', ' + this.notes + '.';
}

// user

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputPlace = $("input#inputlocation").val();
    var inputLandmark = $("input#inputlandmark").val();
    var inputTime = $("input#inputtime").val();
    var inputNotes = $("input#inputnotes").val();


    var newPlace = new Place(inputPlace, inputLandmark, inputTime, inputNotes);

    $("ul#results").append("<li><span class='contact'>" + newPlace.displayProperties() + "</span></li>");

    $("input#inputlocation").val("");
    $("input#inputlandmark").val("");
    $("input#inputtime").val("");
    $("input#inputnotes").val("");

  });

    $(".contact").last().click(function() {
    $("#show-results").show();
    $("#show-results h2").text(newPlace.location);
    $("#location").text(newPlace.location);
    $("#landmark").text(newPlace.landmark);
    $("#time").text(newPlace.time);
    $("#notes").text(newPlace.notes);

  });
});
