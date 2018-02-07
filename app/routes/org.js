import Route from '@ember/routing/route';

export default Route.extend({
  authentication:Ember.inject.service(),
  setupController(controller){
    this._super(...arguments);
    controller.set('records', this.get('authentication.records'))
  },
  actions:{
    addTwoToRecords:function(value){
      var obj = this.get('authentication.records');
      this.get('authentication.records').addObject({id:value});
    }
  }
});
