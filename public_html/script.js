$(document).ready(function(){
    $(".menu-trigger").click(function(){
        $(".menu").slideToggle(400,function(){
            $(this).toggleClass("nav-expanded").css('display','');
        });
    });
});


$(document).ready(function(){
   $(".handle").click(function(){
      $("nav ul").toggleClass("showing"); 
   }); 
});




//$(document).ready(function(){
//    $("#coding-item").hover(function(){
//        $("#coding").toggleClass(".showing");
//    });
//});

//$("#coding-item").hover(function(){
//    $('#coding').show();
//},function(){
//    $('#coding').hide();
//    });
//$("#statistics-item").hover(function(){
//    $('#statistics').show();
//},function(){
//    $('#statistics').hide();
//    });
//$("#random-item").hover(function(){
//    $('#interesting').show();
//},function(){
//    $('#interesting').hide();
//    });
    
    
//this is for showing some basic info when user hovers over
$(document).ready(function(){
    
    $('#coding-item').hover(function(){
        
        $('#coding').slideToggle('fast');  
        },function(){
            $('#coding').slideToggle('fast');
    //setTimeout(function(){$('#coding').slideToggle('fast');}, 5000);     
     
    });
    $('#statistics-item').hover(function(){
        
        $('#statistics').slideToggle('fast');  
        },function(){
            $('#statistics').slideToggle('fast');
    //setTimeout(function(){$('#statistics').slideToggle('fast');}, 5000);     
     
    });
    $('#random-item').hover(function(){
        
        $('#interesting').slideToggle('fast');
        $('#interesting').style.background = 'red';
        },function(){
            $('#interesting').slideToggle('fast');
    //setTimeout(function(){$('#interesting').slideToggle('fast');}, 5000);     
     
    });
});
//this ^ works


//$(document).ready(function(){
//    
//    var items = document.getElementById("main-choices").getElementsByTagName("li");
//    var divs = document.getElementById("divs").getElementsByTagName("p");
//
//
//    
////    alert(divs.length);
////    alert(items[1].valueOf());
//    
////    $('#coding-item').hover(function(){
////        
////        $('#coding').slideToggle('fast');  
////        },function(){
////    setTimeout(function()
//              {
//              $('#coding').slideToggle('fast');
//              }, 5000);     
////     
////    });
//});


$(document).idle({
  onIdle: function(){
    //alert('I\'m idle');
    setInterval(function()
              {
              $('#coding').slideToggle('fast');
              setInterval(function()
              {
                  $('statistics').slideToggle('fast');
              },5000);
              }, 20000);     
//        $("#main-choices").animate({bottom: '-=10px'});
   
  },
  onActive: function(){
   // alert('Hey, I\'m back!');
  },
  idle: 4000
});

$(document).ready(function(){
    $("button").click(function(){
        $("h1").animate({left: '250px'});
    });
});



