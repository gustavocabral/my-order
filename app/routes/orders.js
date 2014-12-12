import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		//this.store.find('categories');
		return [{id: 1, name: '2014-12-09-12:12-#1'},
				{id: 2, name: '2014-12-09-12:07-#3'},
				{id: 3, name: '2014-12-09-12:01-#2'}];
	}
});
