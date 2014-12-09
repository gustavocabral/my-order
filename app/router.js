import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ShoppingENV.locationType
});

Router.map(function() {
	this.route('options', {path: '/'});
	this.resource('menu', {path: '/menu'});
	this.resource('tables', {path: '/tables'});
	this.resource('orders', {path: '/orders'})
});

export default Router;
