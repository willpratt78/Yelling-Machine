$(document).ready(function() {
  $("#formOne").submit(function(event) {
  event.preventDefault();
  const input1 = $("input#input1").val();
  $(".input1").text(input1.toUpperCase());
  });
});