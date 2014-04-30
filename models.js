// Define a Reminder Model
var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    reminder: '',
    time: '',
    date: '',
    type: '',
  }
})