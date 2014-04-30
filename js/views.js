var app = app || {};

app.MainView = Backbone.View.extend({
  el: '#addReminderForm',
  events: {
    'click #addReminderButton': 'addReminder'
  },
  initialize: function() {
    this.$reminder = this.$('#text');
    this.$date = this.$('#date');
    this.$time = this.$('#time');
    this.$type = this.$('#type');
  },
  addReminder: function(e) {
    e.preventDefault();

    var reminder = this.$reminder.val();
    var date = this.$date.val();
    var time = this.$time.val();
    var type = this.$type.val();

    // TODO: Vab, do the form validation here

    var reminder = new app.Reminder({
      reminder: reminder,
      date: date,
      time: time,
      type: type
    });
    app.ReminderCollection.add(reminder);
  }
});

app.mainview = new app.MainView();