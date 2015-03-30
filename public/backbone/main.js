var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };
var collection;

Todoapp.initialize = function(){
	// create a globally scoped collection
	myCollection = new Todoapp.Collections.TodoCollection();
	//listView is a ul of all the views
	var listView = new Todoapp.Views.TodoListView({
		// "what collection will I be listening to?"
		collection: myCollection,
		// "where should I put it?"
			// the HTML element where id="todos" is a <ul> in the index.html file
		el: $('#todos')
	});
	// collection.fetch() keeps everything in sync. .fetch() is an ajax call to the server to get all the items in the collection. It knows which URL hit because it's specified in the collection.js file
		// when it gets the info back, it's in JSON, and holds a bunch of models
		// it then turns them into JS and iterates through all of them, and makes a new model for every one and puts it in the collection
	myCollection.fetch();


}

$(function(){

	Todoapp.initialize();

});