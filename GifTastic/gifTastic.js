
    // set a series of default buttons
    var color = ["red", "blue", "yellow", "pink","green","purple","white","black"];
    // add button to page
  function addButton(){
  	   $("#buttons").empty();
  	    for(var i=0;i<color.length;i++){
    	    var button=$("<button>");
    		button.text(color[i])
    		      .attr("value",color[i])
    		      .attr("class","butt");
    		$("#buttons").append(button);
    };

  };
	addButton();


// feed api the keyword that user select

	function select(){
		$(".butt").css("color","black");
		$("#pics").empty();
		var term=$(this).attr("value");
		$(this).css("color","red");

// append still image to the web
    	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + term + "&api_key=l2pAfQ8NGmNNL63O8fbncvCjaesrL4Kx";

   		 $.ajax({
     		 url: queryURL,
     		 method: "GET"

    	  }).then(function(response){
    	  	// for loop to attatch image
    		for(i=0;i<response.data.length;i++){
    			var gif=response.data[i].images.preview_gif.url;
    			var img=$("<img>");

    	   	 img.attr("src",response.data[i].images.fixed_height_still.url)
    	   	    .attr("class","img")
    	   	    .attr("width",response.data[i].images.fixed_height_still.width)
    	   	    // .attr("height",response.data[i].images.fixed_height_still.height)
    	   	    // store the gif url to use later after click
    	   	    .attr("store",gif);
    			$("#pics").append(img);

    		};
    			// click to trun the still image into gif
	   			
    			$(".img").on("click",function(){

    				var grabValue=$(this).attr("store");
			  		$(this).attr("src",grabValue);
    	   	    
				});


    	 });


    };

 $(document).on("click", ".butt",select);
// customized button adding
$("#add-key").on("click",function(event){
	event.preventDefault();
	var newKey=$("#key-input").val().trim();
	color.push(newKey);
	addButton();


});








