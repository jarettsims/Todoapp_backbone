// basic namespacing ... Todoapp is an object, and has Models, Collections, and Views (all of which are their own objects) inside of it
var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };
// simple JavaScript dot notation defining a key (TodoView), sits inside Views object as defined above
Todoapp.Views.TodoView = Backbone.View.extend({
	initialize: function(){},
	tagName: 'li',
	// _.template is sort of like File.read from Ruby, just bringing in the template with the specified id (found in a script on the index.html)
	todoTemplate: _.template( $('#todo-template') ),
	// events is a Backbone keyword. It's looking for events and then will add the event listeners.
		// as Backbone is an MV* library with no explicit CONTROLLER, the events object plays the roll of CONTROLLER, specifying the events and actions (methods) that should be called when those events are triggered
	events: {
		// the event --> what to listen to --> what to do (the actual events are defined as methods below)
		'click [data-action="destroy"]' : 'destroyTodo'
	},
	// render is not a keyword, it's a function called elsewhere
	render: function(){
		// the $ makes the element a jQuery object that jQuery methods can be used on
		// this.$el.empty(); ... cleans out the old contents of our element
		this.$el.empty();
		// the .html() replaces the current HTML
		// if we were using .append(), we would need .empty() first, otherwise we'd have the old content hanging around
		this.$el.html(this.todoTemplate( this.model.attributes ));
		return this
	},
	destroyTodo: function(e){
		e.preventDefault();
		this.model.destroy();
	}
});