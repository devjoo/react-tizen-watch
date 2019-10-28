export const onRotaryDetent = (e) => {
	const {direction} = e.detail;
	
	
	// 스포츠메인 #sports_main
	
	/*if (direction == 'CW') {
		rotaryPosition++;

		if (rotaryPosition > 5) {
			rotaryPosition = 0;
		}

	} else {
		rotaryPosition--;

		if (rotaryPosition < 0) {
			rotaryPosition = 5;
		}
	}*/
	
	// $('#sports_main .btns button:eq(' + rotaryPosition + ')').trigger('click');
	
	
	// 기본 리스트 .basic-list
	
	var scrollPosition = 0;
	var rowHeight = 0;
	
	if (genie.rotaryMode == 'recommend_main') {
		rowHeight = 290;
	} else {
		rowHeight = 315;
	}
	
	if (direction == 'CW') {
		scrollPosition = (parseInt(($('body').scrollTop() / rowHeight)) + 1) * rowHeight;
	} else {
		scrollPosition = (parseInt(($('body').scrollTop() / rowHeight)) - 1) * rowHeight;
	}
	
	var delay = 100;
	
	if (isAnimate) {
		delay = 0;
		if (direction == 'CW') {
			scrollPosition += rowHeight;
		} else {
			scrollPosition -= rowHeight;
		}
		
	} else {
		isAnimate = true;
		delay = 100;
	}
	
	/*$('body').animate(
		{scrollTop: scrollPosition},
		delay,
		function () {
			$('body').scrollTop(scrollPosition);
			isAnimate = false;
		}
	);*/
	
	
	// #player
	/*var visible_view = $('.wrap-list').attr('class').indexOf('page') > -1 ? $('.wrap-list').attr('class').split(' ')[1] : 'page1';

	if (direction == 'CW') {

		if (visible_view == 'page1') {
			$('#player-info').trigger('swipeleft');
		} else if (visible_view == 'page2') {
			$('#player-lyrics').trigger('swipeleft');
		}

	} else {

		if (visible_view == 'page2') {
			$('#player-lyrics').trigger('swiperight');
		} else if (visible_view == 'page3') {
			$('#player-option').trigger('swiperight');
		}
	}*/
	
	
}