function getAllReminders () {
	// it will get all reminder from local storage
	var reminders = localStorage.getItem('reminders');
	if (!reminders) {
		return;
	}
	reminders = JSON.parse(reminders);
	for (var i = 0; i < reminders.length; i++) {
		var text = reminders[i].text;
		var thatTime = new Date(reminders[i].time);
		var now = new Date();
		var seconds = thatTime-now;
		console.log(thatTime);
		$('#list').append('<div class="color-swatches"><div class="color-swatch brand-primary"><li class="li">'+text+'</li></div></div><br>');
		$('#text').val('');
		setTimeout(function () {
			// body...
			var msg = new SpeechSynthesisUtterance(text);
			window.speechSynthesis.speak(msg);
		},seconds);
	};

}
function setReminder (e) {
	// body...
	e.preventDefault();
	var text = $('#text').val();
	var time = $('#time').val();
	var date = $('#date').val();
	var thatTime = new Date (date+ ' ' +time);
	var now = new Date();
	var seconds = thatTime-now;
	console.log(thatTime);
	$('#list').append('<div class="color-swatches"><div class="color-swatch brand-primary"><li>'+text+'</li></div></div>');

	$('#text').val('');
	setTimeout(function () {
		// body...
		var msg = new SpeechSynthesisUtterance(text);
		window.speechSynthesis.speak(msg);
	},seconds);
	// Saving the reminder to local storage
	var reminder = { 
		'text' : text,
		'time' : thatTime
	};
	setAllReminders(reminder);
}
function setAllReminders (reminder) {
	// get reminder object and saving to local storage
	var reminders = localStorage.getItem('reminders');
	if (!reminders) {
		reminders = '[]';
	}
	reminders = JSON.parse(reminders);
	reminders.push(reminder);
	reminders = JSON.stringify(reminders);
	localStorage.setItem('reminders', reminders);
}
$('#submitButton').on('click', setReminder);

$(document).ready(function () {
	// body...
	getAllReminders();
});