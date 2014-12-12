import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		//this.store.find('categories');
		return [{id: 1, name: '#1'},
				{id: 2, name: '#2'},
				{id: 3, name: '#3'}];
	}
});
