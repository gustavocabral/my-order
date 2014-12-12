import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		switch (params.order_id) {
			case '1':
				return {id: 1, time: 't1'};
			case '2':
				return {id: 2, time: 't2'};
			case '3':
				return {id: 3, time: 't3'};
		}
		//this.store.find('categories');
	}
});
