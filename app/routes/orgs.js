import Route from '@ember/routing/route';

export default Route.extend({
  favorites:Ember.inject.service(),

  model:function(params){
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
     if(this.get('favorites.items').indexOf(org) < 0)
      {
        let fav = this.get('favorites').favoriteItems(org);
      }
      else {
        let fav = this.get('favorites').unfavoriteItems(org);
      }
    }
  }

});
