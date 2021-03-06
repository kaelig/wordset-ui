import Ember from "ember";

export default Ember.Controller.extend({
  needs: ["application"],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  showPanel: Ember.computed.alias('controllers.application.showPanel'),
});
