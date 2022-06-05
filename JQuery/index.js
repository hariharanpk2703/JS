$("#hide").click(function () {
  $("p").hide();
});
$("#show").click(function () {
  $("p").show();
});

$("button").click(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/12",
    type: "GET",
    success: function (response) {
      document.getElementById("ajax").innerText = response.title;
    },
  });
});
