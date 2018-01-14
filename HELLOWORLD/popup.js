$(function(){
	$('#name').keyup(function(){
		$('#greet').text('hello ' +$('#name').val());
	})
})