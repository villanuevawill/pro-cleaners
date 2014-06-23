/*
  William Villanueva
  Adv Website Design & Mgmt
  Spring Quarter 2014
*/
$(function(){
	localStorage['First Name'] = 'William';
	localStorage['Last Name'] = 'Villanueva';
	localStorage.setItem('Course', 'Adv Website Design & Mgmt');
	$('.classInfo').click(function(e){
		$('.classInfo').hide();
		for (var i = 0; i<localStorage.length; i++) {
			if (localStorage.key(i) !== 'persist'){
			$('.starter-template').append('<p>'+localStorage.key(i) + ': '+ localStorage.getItem(localStorage.key(i)) + '</p>');
		    }
		}
		e.preventDefault();

	});
});