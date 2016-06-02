/*This file is for your custom js.  All yours*/
$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    debugger;
    var animal = parseInt($("#animal-selector").val());
    if (animal === 1) {
      $("#aardvark").show();
    }
    else if (animal === 2) {
      $("#crocodile").show();
    }
    else {
      $("#racoon").show();
    };
  })
});
