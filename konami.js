$(function() {
  var codeEntered = false;
  var kArray = [38,38,40,40,37,39,37,39,66,65];
  $(document).keydown(function(event){
    var i = ($("#kcode div").length);
    if(event.which == kArray[i]){
      $("#kcode").append("<div class='konamic'></div>");
      if(($("#kcode div").length) == 10){
        codeEntered = true; // use this to trigger a function
      };
    }
    else{
      $(".konamic").remove();
    }
  });
});
