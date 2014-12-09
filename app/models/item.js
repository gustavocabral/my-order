import DS from 'ember-data';

export default DS.Model.extend({
  	id: DS.attr('integer'),
	product: DS.hasMany('Product'),
	quantity: DS.attr('integer')
});
