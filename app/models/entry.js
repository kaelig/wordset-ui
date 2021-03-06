import DS from 'ember-data';

export default DS.Model.extend({
  pos: DS.attr("string"),
  wordset: DS.belongsTo("wordset"),
  meanings: DS.hasMany("meanings")
});
