// var book = function(time1, time2) {
//
// }

$(function() {
  $("#formOne").submit(function(event) {

    var nameInput = $("input#name").val();
    var email = $("#email").val();
    var reason = $("#reason").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);


    $("#confirm").show();

    event.preventDefault();
  });
});
