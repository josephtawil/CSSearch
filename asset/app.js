$(document).ready(function () {
  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();
    // var api_key = $("#api_key").val();
    var api_key = "&apikey=8db0f9bc1f4b7d7c56298c24299661bf";
    var cat = "&q=coffee";
    var searchURL = "https://developers.zomato.com/api/v2.1/search?";
    var count = "&count=5";

    var textInput = $("#textInput").val();
    $("#textInput").val("");
    var cat = $("#cat").val();
    $("#limit").val("");
    $("main").html("");

    $.ajax({
      type: "GET",
      url: searchURL + "entity_id=306&entity_type=city" + cat + count + api_key,
      dataType: "json",
    }).then(function (response) {
      console.log(response);

      // for (var i = 0; i < response.data.length; i++) {
      //   var still = response.data[i].images.original_still.url;
      //   var gif = response.data[i].images.original.url;
      //   $("main").prepend(
      //     `<img class="gif" data-still=${still} data-gif=${gif} src=${still}></img>`
      //   );
      // }
    });
  });
});
