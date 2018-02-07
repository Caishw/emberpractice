import Route from '@ember/routing/route';

export default Route.extend({
  model(){
  let org = this.modelFor('org').login;
  let repo = this.modelFor('org.repo').name;
  return  $.get(`https://api.github.com/repos/${org}/${repo}/contributors`);
}
});
