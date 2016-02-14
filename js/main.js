// Slideshow of images 

var images = ["main-room-1.jpg", "main-room-2.jpg", "main-room-3.jpg"]
var currentImage = 0; 


$('.next').on('click', function() {
	currentImage += 1; 
	updateImage();

	if (currentImage == images.length) {
		currentImage = 0; 
		updateImage();
	}
});


$('.prev').on('click', function() {
	if (currentImage == 0) {
		currentImage = images.length - 1; 
		updateImage();
	} else {
		currentImage -= 1; 
		updateImage();
	}

});

function updateImage() {
	$('#current-image').attr('src', 'images/' + images[currentImage]);
}


// Photo gallery of event space and rooms 


var $overlay = $('<div class="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$(".photo-gallery").append($overlay);

  //click the image and a scaled version of the full size image will appear
  $(".photo-gallery a").click( function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.show();
  } );

  $(".overlay").click(function() {
    $( ".overlay" ).hide();
  });