// The first line sets Todoapp if it exists already, otherwise set it to a hash filled with models, collections, and views
// overkill in this case, but typically, we're going to want to make more than one model.
	// and this namespacing lets you organize stuff when you have multiple models
// Todoapp is a globally scoped variable so you can access it anywhere. It gets loaded into memory, and it's very easily accessed
	// therefore, to create a Users model, all you'd have to do is type Todoapp.Models.User = Backbone.Model.extend({...});

var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };
// no var in declaration makes this a global variable
Todoapp.Models.Todo = Backbone.Model.extend({
	initialize: function(){
		console.log("Added a todo");
	},
	defaults: {
		// these default values have key names that correspond to database column names 
		name: '',
		completed: false
	}
});