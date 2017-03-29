alert("hello world");
    var apiKey = "dc6zaTOxFJmzC";
    
    var myArry = ["baseball","basketball","golf","football","soccer"];
    

   $( document ).ready(function() {
// createst the buttons
    function createButton(){

      $("#sB").empty();
      for (var i = 0; i < myArry.length; i++){
         myInterestButton = $("<button>");
         myInterestButton.attr("data-name",myArry[i]);
         myInterestButton.text(myArry[i]);
         myInterestButton.addClass("sport");
         // myInterestButton.attr
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
	
//
function sportsInfo(){
  var myInterest = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+myInterest+"&api_key=dc6zaTOxFJmzC&limit=5";   

  $("#sport").empty();
 		$.ajax({
             url: queryURL,
              method: "GET"
            })
    .done(function(response) {
              // $("#movie-view").text(JSON.stringify(response));
        var results = (response.data);
        var move = true;
              
        for (var i = 0; i < results.length; i++){

             var gifRating = results[i].rating;
             var p = $("<p>").text("Rating: " + gifRating);

             var gifImage = $("<img>");
                 gifImage.addClass("flip");
                 gifImage.attr("src", results[i].images.fixed_height_still.url);
             $("#sport").append(p);
             $("#sport").append(gifImage);         
           }
           $(document).on("click",".flip",function(){
            alert("image was clicked");
            
            if(move = true){
              move = false;
             gifImage.attr("src", results[i].images.fixed_height.url);
            }
            else{
              move = true;
              gifImage.attr("src", results[i].images.fixed_height_still.url);
            }
          });
    });    
       
 }
 // change the gif from still to not still
 function changeState(){
    gifImage.on("click",function(){
      alert("image was clicked");
    });
    // var move = true;
    
    // if(move){
    //   move=false;
    //   gifImage.attr("src", results[i].images.fixed_height.url);
    // } 
  }

 //$(document).on("click",".flip",changeState);
 $(document).on("click",".sport",sportsInfo);
 
    
});

    
