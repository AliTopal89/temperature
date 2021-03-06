// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$('#PageRefresh').click(function() {
 
            location.reload();
 
  });


	var form = $("#search");
	var tempSearch = $("#temp-search");

	form.on("submit", function(event){
 	event.preventDefault();
	var query = tempSearch.val();
	$.ajax({
		url: "http://api.worldweatheronline.com/free/v2/weather.ashx?" + query + "&format=json&date=today&includelocation=yes&key=a0a0205a5848630b4b3cb200e4683",
    	data: {"q": JSON.stringify({"query": query})},
    	type: "GET",
    	dataType: "jsonp",
    	context: this
  	}).done(function(response){
  		
  		$("#location").append("   " + response.data.nearest_area[0].areaName[0].value + "" + "|");

	  	$("#temperature_c").append("   " + response.data.current_condition[0].temp_C + " Celsius" + ",|");

    	$("#temperature_f").append("   " + response.data.current_condition[0].temp_F + " Fahreneit" + "|");  
 
	});

  });

});