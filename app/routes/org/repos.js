import Route from '@ember/routing/route';

export default Route.extend({

  model(params){
    let orgObj = this.modelFor('org');
    let org = this.modelFor('org').login;
    //console.log(org);
    return $.get(`https://api.github.com/orgs/${org}/repos`);
  },
  setupController(controller){
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});
