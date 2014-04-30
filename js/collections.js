// Collections for Reminder
var app = app || {}; 
app.reminderCollection = Backbone.Collection.extend({
  model: app.Reminder
});

app.ReminderCollection = new app.reminderCollection();