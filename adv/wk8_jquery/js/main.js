$( document ).ready(function() {



// .html()
$('.bacon').html( "<bites>This paragraph was added via jQuery</bites>: Bacon ipsum dolor amet andouille shank meatloaf chicken pork chop. Kielbasa fatback pork tenderloin. Porchetta pastrami pig cow biltong, meatloaf meatball short ribs chuck cupim flank brisket chicken. Shankle flank t-bone picanha alcatra. Tongue pig kevin ribeye meatball pancetta. Porchetta salami capicola, bresaola fatback pig pastrami andouille.");

$('.bacon bites')
	.css('color', 'darkred')
	.css('text-decoration', 'underline')
	.css('text-transform', 'uppercase')
	.css('letter-spacing', '.05em')
	.css('font-size', '.9em');


// .text()
$('.breakfast').text("bacon, eggs, and you gotta have coffee");


// .attr() – GET

var color = $('.question').attr('color');
$('color').text('the text color is ');





// .width() – SET
$('.width-ex').width('100px');


// .height() – SET
$('.height-ex').width('100px');
$('.height-ex').height('200px');




// .position() – GET
$('tion').position('top:50', 'left:100')






// .val() – GET -- used for form elements








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





