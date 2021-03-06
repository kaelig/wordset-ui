import DS from "ember-data";

export default DS.Model.extend({
  lang: DS.belongsTo("lang"),
  name: DS.attr("string"),
  isDialect: DS.attr("boolean"),
  forSeq: DS.attr("boolean"),
  forMeaning: DS.attr("boolean"),

  proposals: DS.hasMany("proposals"),

  // This is for the weird tree relationship that's
  // going on with labels able to be owned by other
  // labels – e.g. dialect nesting
  children: DS.hasMany("labels", {inverse: "parent"}),
  parent: DS.belongsTo("label", {inverse: "children"}),
});
