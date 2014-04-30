// Define a Reminder Model
var app = app || {};

app.reminderTypes = ['daily', 'weekly', 'once'];

app.Reminder = Backbone.Model.extend({
  defaults: {
    reminder: 'Untitled Reminder',
    date: new Date(),
    type: 'once',
  }
});