import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(){
    this._super(...arguments);
    this.transitionTo('org.repo.issues');
  },
  model(params){
    let org = Ember.get(this.modelFor('org'),'login');
    return  $.get(`https://api.github.com/repos/${org}/${params.rid}`)
   .then(
     rawRepo => {
      rawRepo.oldId = rawRepo.id;
    rawRepo.id = rawRepo.name;
    return rawRepo;})
}
});
