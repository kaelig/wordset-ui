import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  text: DS.attr("string"),
  publishedAt: DS.attr("date"),
  authorName: DS.attr("string"),
});
