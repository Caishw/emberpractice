import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-org', 'Integration | Component | github org', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  assert.expect(2);
  this.render(hbs`{{github-org}}`);

  assert.equal(this.$().text().trim(), `[
Fav
]`,'Inline syntax');

  // Template block usage:
  this.render(hbs`
    {{#github-org}}
      Block syntax
    {{/github-org}}
  `);

 assert.equal(this.$().text().trim(), `[
Fav
]`, 'Block syntax');
});

test('it renders', function(assert) {
  assert.expect(2);
  const obj = Ember.Object.create({
    id:'my-org'
  });
  this.set('o', obj)
  this.render(hbs`{{github-org org=o favClicked='favClicked'}}`);
  assert.equal(Ember.$('.github-org a').text(),'my-org', 'Found org id');

  this.set('favClicked', function(){
    debugger;
  })
  Ember.$('.github-org span').click();
});
