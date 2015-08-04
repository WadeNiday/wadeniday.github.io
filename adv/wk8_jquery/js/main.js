$( document ).ready(function() {



// .html()
$('.bacon').html( "<bites>This paragraph was added via jQuery</bites>: Bacon ipsum dolor amet andouille shank meatloaf chicken pork chop. Kielbasa fatback pork tenderloin. Porchetta salami capicola, bresaola fatback pig pastrami andouille.");

$('.bacon bites')
	.css('color', '#222')
	.css('text-decoration', 'underline')
	.css('text-transform', 'uppercase')
	.css('letter-spacing', '.05em')
	.css('font-size', '.9em');


// .text()
$('.breakfast').text("bacon, eggs, and you gotta have coffee");


// .attr() – GETTING the url and showing it to the user(via alert)
alert($(".question a").attr("href"));


// .attr() – SETTING the url and showing it to the user(via alert)
// alert($(".question2 a").attr("href", "http://www.google.co.uk"));

// .width() – SET
$('.width-ex').width('100px');


// .height() – SET
$('.height-ex').width('100px');
$('.height-ex').height('200px');


// .position() – this is a GET only
$('#work2').click(function(){
    var pixels = $('p').position();
    alert('Top:' + pixels.top + 'Left:' + pixels.left);
});



// .val() – designed to work with the <input> tag; btn triggers function
// *** https://blog.udemy.com/jquery-set-value***

  $("#work").click(function(){
    $('#defaultText').val('gatorwade76');
  });


// .addClass()
$('.bananas').addClass('added');


// .removeClass()
$('.bananas2').removeClass('added');


// .insertAfter()
$("<a href='baconipsum.com'><h2>baconipsum.com</h2></a>").insertAfter('#in-after');

// .insertBefore()
$("<a href='baconipsum.com'><h2>baconipsum.com</h2></a>").insertBefore('#in-before');

// .appendTo()
$("<h3>this part was added with jQuery</h3>").appendTo('#bottom');

// .prependTo()
$("<h3>this part was added with jQuery</h3>").prependTo('#top');



// .fadeIn()
$('.btn').fadeIn( 'slow' );


// .fadeOut()
$('.fade-out').delay(6000).fadeOut('xslow');







});





