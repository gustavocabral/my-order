import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		switch (params.category_id) {
			case '1':
				return [{id: 1, name: 'Coke'},
						{id: 2, name: 'Pepsi'},
						{id: 3, name: 'Mountain Dew'}];
			case '2':
				return [{id: 1, name: 'Hamburger'},
						{id: 2, name: 'Cheeseburger'},
						{id: 3, name: 'Double Cheeseburger'}];
			case '3':
				return [{id: 1, name: 'Tiramisu'},
						{id: 2, name: 'Ice cream'},
						{id: 3, name: 'Cheese cake'}];						
		}
		//this.store.find('categories');
	}
});
