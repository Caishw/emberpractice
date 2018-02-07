import Service from '@ember/service';

export default Service.extend({
  favorites: [],

  favoriteItems(fav){
    this.get('favorites').addObject(fav);
    console.log(this.get('favorites').map(x => x.id).join(','));
  }
});
