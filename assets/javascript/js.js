   
    var myArry = ["baseball","basketball","golf","football","soccer"];
    
   $( document ).ready(function() {
// creates the buttons
    function createButton(){

      $("#sB").empty();
      for (var i = 0; i < myArry.length; i++){
         myInterestButton = $("<button>");
         myInterestButton.attr("data-name",myArry[i]);
         myInterestButton.text(myArry[i]);
         myInterestButton.addClass("sport");
         $("#sB").append(myInterestButton);
        
          }
    }
	//clicking function to button/item to my array
    $("#addSport").on("click", function() {
    event.preventDefault();
    var newSport = $("#sport-Input").val().trim();
    myArry.push(newSport);
    createButton(); 
  
  });
		createButton();
	
//add in giphs and controls the state of the gip ie still or animated
  function sportsInfo(){
    var myInterest = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+myInterest+"&api_key=dc6zaTOxFJmzC&limit=5"; 
   

  $("#sport").empty();
 		$.ajax({
             url: queryURL,
              method: "GET"
            })
    .done(function(response) {
              
        var results = (response.data);
        var move = true;
              
        for (var i = 0; i < results.length; i++){

             var gifRating = results[i].rating;
             var p = $("<p>").text("Rating: " + gifRating);

             var gifImage = $("<img>");
                 gifImage.addClass("flip");
                 gifImage.attr("src", results[i].images.fixed_height_still.url);
                 gifImage.attr("data-still",results[i].images.fixed_height_still.url);
                 gifImage.attr("data-animate",results[i].images.fixed_height.url);
                 gifImage.attr("data-state","still");

             $("#sport").append(p);
             $("#sport").append(gifImage);         
           }
           // checks state and changes state on click
            $(".flip").on("click", function() {
      
            var state = $(this).attr("data-state");
            
            if (state === "still") {
             $(this).attr("src", $(this).attr("data-animate"));
            //  $(this).attr("src", $(this).data("animate");
              $(this).attr("data-state", "animate");
            }
            else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
    });
         
    });    
  }

 
 $(document).on("click",".sport",sportsInfo);
 
    
});

    
