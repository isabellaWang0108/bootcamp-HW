
    // set a series of default buttons
    var color = ["red", "blue", "yellow", "pink","green"];
    for(var i=0;i<color.length;i++){
    	    var button=$("<button>");
    		button.text(color[i]);
    		$("#buttons").append(button);
    };

//     var term="red";


// // append still image to the web
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + term + "&api_key=l2pAfQ8NGmNNL63O8fbncvCjaesrL4Kx";

//     $.ajax({
//       url: queryURL,
//       method: "GET"

//     }).then(function(response){
//     	for(i=0;i<response.data.length;i++){
//     		var img=$("<img>");
//     	    img.attr("src",response.data[i].images.fixed_height_still.url);
//     		$("#pics").append(img);

//     	}


//     });