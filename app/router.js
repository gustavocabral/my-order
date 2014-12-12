import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ShoppingENV.locationType
});

Router.map(function() {
	this.resource('application', {path: '/'}, function () {
		this.resource('categories', {path: '/categories'}, function () {
			this.resource('items', {path: '/:category_id/items'});
		});
		this.resource('tables', {path: '/tables'}, function () {
			this.route('table', {path: '/:table_id'});
		});
		this.resource('orders', {path: '/orders'}, function () {
			this.route('order', {path: '/:order_id'});
		});
	});
});

export default Router;
