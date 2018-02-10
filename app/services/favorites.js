import Service from '@ember/service';

export default Service.extend({
  items: [],

  favoriteItems(fav){
    this.get('items').addObject(fav);
    console.log(this.get('items').map(x => x.id).join(','));
  },
  unfavoriteItems(fav){
    this.get('items').removeObject(fav);
    console.log(this.get('items').map(x => x.id).join(','));
  }
});
