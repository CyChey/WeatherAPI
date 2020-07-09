$(document).ready(function () {
  $("#submitWeather").click(function () {
    const city = $("#city").val();

    if (city != "") {
      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial" +
          "&appid=42a826fd23f2fb31ea44f88756433b2e",
        type: "GET",
        dataType: "json",
        success: function (data) {
          const widget = show(data);
          $("#show").html(widget);
          $("#city").val("");
        },
      });
    } else {
      $("#error").html("Form Can't Be Empty");
    }
  });
});

function show(data) {
  return "<h3><strong>Weather</strong>: " + data.main.temp + "</h3>";
}
