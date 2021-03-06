import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('quiz', params.id);
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set("selections", {});
  },
  afterModel: function(model) {
    this._super(model);
    Ember.$(document).attr('title', 'Quiz: ' + model.get("title"));
  },
});
