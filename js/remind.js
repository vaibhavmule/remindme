$('#submitButton').on('click', function (e) {
	// body...
	e.preventDefault();
	var text = $('#text').val();
	var time = $('#time').val();
	var date = $('#date').val();
	var thatTime = new Date (date+ ' ' +time);
	var now = new Date();
	var seconds = thatTime-now;
	console.log(thatTime);
	$('#list').append('<li>'+text+'</li>');
	$('#text').val('');
	setTimeout(function () {
		// body...
		var msg = new SpeechSynthesisUtterance(text);
		window.speechSynthesis.speak(msg);
	},seconds);
});
