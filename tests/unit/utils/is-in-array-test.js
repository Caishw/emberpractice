import isInArray from 'github-ui/utils/is-in-array';
import { module, test } from 'qunit';

module('Unit | Utility | is in array');

// Replace this with your real tests.
test('it works', function(assert) {


  const Type  = Ember.Object.extend({
    item : 6,
    list : [1,2,3],
    isItemInlist : isInArray('item','list')
  })
   const obj = Type.create();

  assert.equal(obj.get('isItemInlist'), false, 'Item not available in the list test');
  obj.get('list').addObject(6);
  assert.equal(obj.get('isItemInlist'), true, 'Item  available in the list test');
});
