import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		switch (params.table_id) {
			case '1':
				return {id: 1, total: 'U$ 12.12'};
			case '2':
				return {id: 2, total: 'U$ 43.23'};
			case '3':
				return {id: 3, total: 'U$ 53.77'};
		}
		//this.store.find('categories');
	}
});
