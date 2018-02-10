// import Ember from 'ember';
import { computed } from '@ember/object';
// const { computed } = Ember;
export default function isInArray(item, itemToBeChecked) {
  return computed(item, `${itemToBeChecked}.[]`, function(){
    const item1 = this.get(item);
    const list1 = this.get(itemToBeChecked);
    console.log(item1);
    console.log(list1);
    return list1.indexOf(item1) >=0;
    //return true;

  });


}
