$( document ).ready(function() {



// on('click')
$(".one").click(function(){
    $('.textBox-1').animate({'marginTop': '+=50px'
   });
});


// .on('dblclick’)
$(".second").dblclick(function(){
    $('.textBox-2').animate({'marginLeft': '+=50px'
   });
});


// .on('mouseenter')
$(".third").mouseenter(function(){
    $('.textBox-3').animate({'marginLeft': '+=50px'
   });
});


// .on('mouseleave’)
$(".third").mouseleave(function(){
    $('.textBox-3').animate({'marginLeft': '-=50px'
   });
});


// .on('focus')
$("#one").focus(function(){
     $("span").css("display", "inline").fadeOut(7000);
});

// .on('keydown')
$('#two').keydown(function(){
	  $("#down").css("display", "inline").fadeIn(2000);
});


// .on('keypress')
$('#three').keypress(function(){
    $("#down2").css("display", "inline").fadeIn(2000);
});

// .on('resize')









});





