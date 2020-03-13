$(document).ready(function(){
    $(".submenu").click(function(){
      $(this).children("ul").slideToggle();
    })
  });

  $(document).ready(function(){
    $("#slider").click(function(){
      slider();
    });
  });

  $(document).ready(function(){
  $("#boton").click(function(event) {
    $("#htmlext").load('demo.txt');
});
  });
 

  

  $(document).ready(function(){
    $("button").click(function(){
      var div = $("div");  
      div.animate({left: '20em'}, "slow");
      
    });
  });

  $(document).ready(function(){
    $("#extra").click(function(){
      var txt = "";
      txt += "Width del div: " + $("#div1").width() + "</br>";
      txt += "Height del div: " + $("#div1").height();
      $("#div1").html(txt);
    });
  });



   function menu(){
       alert("frhfurhfuhruh");
   }

   function slider(){
    alert("545");
}

function externo(){
    alert("565");
}

function peticion(){
    alert("13");
}

function efectos(){
    
}




