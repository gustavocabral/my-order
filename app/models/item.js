import DS from 'ember-data';

export default DS.Model.extend({
	product: DS.hasMany('Product'),
	quantity: DS.attr('integer')
});
