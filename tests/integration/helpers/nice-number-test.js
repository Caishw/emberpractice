import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nice-number', 'helper:nice-number', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{nice-number inputValue}}`);

  assert.equal(this.$().text().trim(), '1.2K', "Number formatted");

  this.set('inputValue', '89');

  this.render(hbs`{{nice-number inputValue}}`);

  assert.equal(this.$().text().trim(), '89', "Number not formatted");


  this.render(hbs`{{nice-number}}`);

  assert.equal(this.$().text().trim(), '', "Empty string");
});
