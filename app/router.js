import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orgs', {}); // /orgs

  this.route('org', {path: 'org/:id'} ,function() { // org/ember
    this.route('repos', {});
    this.route('repo', {path:  ':rid'}, function() { // /org/jquery/jquery-ui
      this.route('contributors', {});
      this.route('issues',{});
    });
  });
  this.route('notfound', {path:'*path'})
});

export default Router;
