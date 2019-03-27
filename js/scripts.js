// var book = function(time1, time2) {
//
// }

$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var reason = $("#reason").val();
    var date = $("#date").val();
    var time = $("#time").val();

    $("#confirm").show();

  });
});
