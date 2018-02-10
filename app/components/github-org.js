import Component from '@ember/component';
import isInArray from 'github-ui/utils/is-in-array';
import Ember from 'ember';

export default Component.extend({
  favorites:Ember.inject.service(),
  isFavorited : isInArray('org','favorites.items'),
  classNames:['github-org'],
  tagName:'li',
  actions:{
    favClicked:function(){
      this.sendAction('on-fav-clicked', this.get('org'));
    }
  }
});
