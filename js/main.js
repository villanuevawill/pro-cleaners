$(function(){
	localStorage['Name'] = 'William Villanueva';
	$('.classInfo').click(function(e){
		$('.classInfo').hide();
		for (var i = 0; i<localStorage.length; i++) {
			$('.starter-template').append('<p> Designer: '+ localStorage.getItem(localStorage.key(i)) + '</p>');
		}
		e.preventDefault();

	});
});