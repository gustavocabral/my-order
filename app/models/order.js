import DS from 'ember-data';

export default DS.Model.extend({
	id: DS.attr('integer'),
	items: DS.hasMany('Item')
});