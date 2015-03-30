var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Collections.TodoCollection = Backbone.Collection.extend({
	// tell the collection what model it should be a collection of
	model: Todoapp.Models.Todo,
	// the url to hit where the todos are. Use the Backbone fetch() method to hit the route and get back an array
	url: '/todos'
})