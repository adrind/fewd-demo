function changeToCat() {
	$('.cool-animal-pic').attr('src', 'images/cool-cat.gif');
}

function changeToDog() {
	$('.cool-animal-pic').attr('src', 'images/cool-dog.gif');
}

$('.cool-animal-pic').hover(changeToCat, changeToDog);