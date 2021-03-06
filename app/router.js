import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource("index", {path: "/"});
  this.route("redirector");

  this.route("login");
  this.route("user", {path: "/user/:user_id"}, function() {
    this.route("activity");
    this.route("proposals");
  });

  this.route("auth", function() {
    this.route("setup", {path: "/:provider/setup/:token"});
    this.route("oauth_login", {path: "/:provider/login"});
    this.route("manual", {path: "/do/:username/:auth_key"});
  });

  this.route("users", {}, function() {
    this.route("index");
    this.route("forgot-password");
    this.route("reset-password");
    this.route("new");
    this.route("login");
  });
  this.resource("words", {path: "/words/:lang"}, function() {
    this.route("new");
    this.route("random");
  });
  this.resource("posts");
  this.resource("post", {path: "/post/:post_id"});
  this.resource("proposals", function() {
  });
  this.resource("proposal", {path: "/proposal/:proposal_id"}, function() {
    this.route("new-word");
    this.route("new-meaning");
    this.route("meaning-change");
  });
  this.route("project", {path: "/project/:project_id"}, function() {
    this.route("random");
    this.route("propose", {path: "/propose/:meaning_id"});
  });
  this.route("info", function() {
    this.route("goals");
    this.route("faqs");
    this.route("guidelines");
    this.route("get-started");
    this.route("legal");
  });

  this.route('legacy-word', {path: "/word/:seq"});

  this.route("quizzes");
  this.route("quiz", {path: "/quiz/:id"});

  this.resource("seq", {path: "/:lang/:seq"}, function() {
    this.route("wordset", {path: "/"}, function() {
      this.route("proposals");
    });
  });

  this.route('not-found', { path: '/*path' });

});
