
var params = {
  // This is where any modeled request parameters should be added.
  // The key is the parameter name, as it is defined in the API in API Gateway.
};

var body = {
  // This is where you define the body of the request,
};

var additionalParams = {
  // If there are any unmodeled query parameters or headers that must be
  //   sent with the request, add them here.
  headers: {
    "Access-Control-Allow-Origin" : '*',
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": '*',
    "Access-Control-Allow-Headers": '*'
  }
};

var apigClient = apigClientFactory.newClient({
  apiKey: 'z2Tg3V2lpP2i8chmYCcKY564upvcYpep3Z9eSI0b'
});



$('document').ready(function() {
	$('#msg_send').click(function(e) {
		e.preventDefault();
			var a = $("<div class='outgoing_msg'><div class='sent_msg'><p>" + $('#userMsg').val() + "</p></div></div>");
			$("#m_his").append(a);
			body = {
  			// This is where you define the body of the request,
  				"userMessage": $('#userMsg').val()
			};
			apigClient.chatbotPost(params, body, additionalParams)
    			.then(function(data){
			      // Add success callback code here.
			      $("#userMsg").val("");
				  var a = $("<div class='incoming_msg'><div class='incoming_msg_img'><img src='img/icon.png'></div><div class='received_msg'><p>" + data["data"]["response"] + "</p></div></div></div>");
				  $("#m_his").append(a);	
				  console.log(data["data"]["response"]);
			  	 // $('#botResponse').val(data["data"]["response"]);
			    }).catch( function(result){
			      // Add error callback code here.
			      console.log(result);
			    });
		//	$.post("https://4gcknw7y7c.execute-api.us-east-1.amazonaws.com/chat/chatbot", JSON.stringify({
  		//		"userMessage": $('#userMsg').val()
		//	}), function( data ) {
		//	$("#userMsg").val("");
	//		var a = $("<div class='incoming_msg'><div class='incoming_msg_img'><img src='img/icon.png'></div><div class='received_msg'><p>" + data["response"] + "</p></div></div></div>");
	//		$("#m_his").append(a);	
  	//		console.log(data);
  	//		$('#botResponse').val(data["response"]);
		//});
	});
});	