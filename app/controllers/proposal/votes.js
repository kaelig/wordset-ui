import Ember from "ember";
import ENV from '../../config/environment';
// global _gaq //

export default Ember.ArrayController.extend({
  needs: [ "proposal", "application" ],
  proposal: Ember.computed.alias("controllers.proposal.model"),
  isOpen: Ember.computed.alias("controllers.proposal.isOpen"),
  currentUser: Ember.computed.alias("controllers.application.currentUser"),

  myVote: function() {
    return this.get("model").filterBy("usurped", false).filterBy("withdrawn", false).findBy("user.id", this.get("currentUser.id"));
  }.property("model.@each.user", "currentUser"),
  canVote: function() {
    return (!this.get("myVote"));
  }.property("myVote"),
  actions: {
    registerVote: function(type) {
      if(this.get("canVote")) {
        var _this = this;
        var p = _this.get("proposal");
        this.set("justVoted", true);
        _this.send("randomProposal", p.get("id"));
        Ember.$.post(ENV.api + "/votes", {
          vote: {
            type: type,
            proposal_id: p.get('id'),
          }
        }).then(function(data) {
          _this.store.pushPayload(data);
          _this.send("log", "votes", type);
        });

      }
    },
    withdrawVote: function() {
      var _this = this;
      Ember.$.post(ENV.api + "/votes/" + this.get("myVote.id") + "/withdraw",
      {}, function(data) {
        _this.store.pushPayload('proposal', data);
      });
    },
  },


});
