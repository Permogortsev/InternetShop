'use strict'
let slides = document.getElementsByClassName('slider_item'),
		prevBtn = document.getElementById('button-left'),
		nextBtn = document.getElementById('button-right'),
		slideIndex = 1;

function slidesShow (n) {
	if (n < 1) {
		slideIndex = slides.length;
	}
	if (n > slides.length){
		slideIndex = 1;
	}
	for (let i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}
	slides[slideIndex - 1].style.display = 'block';
}

function clidesChange(n) {
	slidesShow(slideIndex += n);
}

prevBtn.onclick = function(){
	clidesChange(-1)
}

nextBtn.onclick = function(){
	clidesChange(1)
}




	slidesShow(slideIndex);