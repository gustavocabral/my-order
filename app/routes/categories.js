import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		//this.store.find('categories');
		return [{id: 1, name: 'Drinks'},
				{id: 2, name: 'Dishes'},
				{id: 3, name: 'Desserts'}];
	}
});
