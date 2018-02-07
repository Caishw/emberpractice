import Route from '@ember/routing/route';

export default Route.extend({
  favorites:Ember.inject.service(),
  model:function(){
    return [
      {id: 'emberjs'},
      {id: 'ember-cli'},
      {id: 'microsoft'},
      {id: 'yahoo'},
      {id: 'netflix'},
      {id: 'facebook'},
    ]
  },
  actions:{
    addToFavorites:function(org){
      let fav = this.get('favorites').favoriteItems(org);
    }
  }
});
