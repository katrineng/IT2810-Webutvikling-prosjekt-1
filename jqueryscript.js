
$("#my_canvas").hover(function(){
    $("#my_canvas").css("background", "linear-gradient(grey,white)");
},
    function(){
    $("#my_canvas").css("background", "linear-gradient(#33ccff, #ff99cc)");
  
})


$("#my_svg").hover(function(){
    $("#my_svg").css("background", "linear-gradient(grey,white)");

},
    function(){
    $("#my_svg").css("background", "linear-gradient(#33ccff, #ff99cc)");
}
)


$('#my_svg').click(function(){
    $('.blomst').toggleClass("bigflower");

})


 
$(document).ready(function(){
    $("#hide").click(function(){
      $("aboutme").hide();
    });
    $("#hide").click(function(){
      $("aboutme").show();
    });
  });



