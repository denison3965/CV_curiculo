function MudarCor() {
	let set_cor2 = document.querySelectorAll("#change_color2");
	let set_cor3 = document.querySelectorAll("#change_color3");
	let set_cor1 = document.querySelectorAll("#change_color1");


	for (var i = 0; i <= 1 ; i++) {

		if(set_cor1[i].classList.contains('color_cinxa1_white') == true) {
		set_cor1[i].classList.remove('color_cinxa1_white');
		set_cor1[i].classList.add('color_cinxa1');
	}
	else{
		set_cor1[i].classList.remove('color_cinxa1');
		set_cor1[i].classList.add('color_cinxa1_white');
	}
	}
	



	for (var i = 0; i <= 3; i++) {

		if(set_cor2[i].classList.contains('color_cinxa2_white') == true) {
		set_cor2[i].classList.remove('color_cinxa2_white');
		set_cor2[i].classList.add('color_cinxa2');
	}
	else{
		set_cor2[i].classList.remove('color_cinxa2');
		set_cor2[i].classList.add('color_cinxa2_white');
	}
	}
	


	for (var i = 0; i <= 3; i++) {

		if(set_cor3[i].classList.contains('color_cinxa3') == true) {
		set_cor3[i].classList.remove('color_cinxa3');
		set_cor3[i].classList.add('color_cinxa3_white');
	}
	else{
		set_cor3[i].classList.remove('color_cinxa3_white');
		set_cor3[i].classList.add('color_cinxa3');
	}
	}
}