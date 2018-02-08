import Component from '@ember/component';

export default Component.extend({
  tagName:'li',
  actions:{
    favClicked:function(){
      this.sendAction('on-fav-clicked', this.get('org'));
    }
  }
});
