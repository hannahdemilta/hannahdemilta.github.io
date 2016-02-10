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


//Hamburger menu pop out 