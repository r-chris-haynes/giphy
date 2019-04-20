var topics = ["Magic Johnson", "Michael Jordan", "Larry Bird", "Charles Barkley", "Shaquille O'Neal",
    "Kobe Bryant", "Lebron James", "Baron Davis", "Rasheed Wallace", "Tim Duncan",
    "Larry Johnson", "Muggsy Bogues", "Scottie Pippen", "Patrick Ewing"];


    //===================================================================================


renderButtons();


$("#add-player").on("click", createNewButton);



//===================================================================================

function renderButtons() {
  $("#buttons-view").empty();
  for (var i = 0; i < topics.length; i ++) {
    var btn = $("<button>");
    btn.addClass("players btn btn-primary m-1");
    btn.text(topics[i]);
    btn.attr("data-name", topics[i]);
    $("#buttons-view").append(btn);
  }
};

function createNewButton() {
  topics.push($("#player-input").val().trim());
  $("#player-input").empty();
  renderButtons();
};

$("#buttons-view").on("click", ".players", function(){
  var player = $(this).attr("data-name");
  var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + player + '&api_key=j0W0AOqIsSG0gsEIUO1KdoSU7H3fiMN6&limit=10';

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    // console.log(response);
    for(var i = 0; i < 10; i++) {
     
      var gifDiv = $("#gifDisplay");


      var playerImg = $("<img>");
      playerImg.attr("src", response.data[i].images.fixed_height_still.url);
      // playerImg.attr("data-state", still);
      playerImg.addClass("gif m-2");
      
      var movPlayerImg = $("<img>");
      movPlayerImg.attr("src", response.data[i].images.fixed_height.url);
      // movPlayerImg.attr("data-state", animate);
      movPlayerImg.addClass("gif m-2");
      
      var rating = $("<p>");
      rating.addClass("m-2");
      rating.text("Rating: " + response.data[i].rating);
    
    gifDiv.prepend(playerImg, rating);
    
      // $(".gif").on("click", function() {
        
      //   var state = this.attr("data-state")
        
      //   if (state === "still") {
      //     $(this).attr("src", $(this).attr("data-animate"));
      //     $(this).attr("data-state", "animate");
      //   } else {
      //     $(this).attr("src", $(this).attr("data-still"));
      //     $(this).attr("data-state", "still");
      //   }
      // })
  }
    
})
})

