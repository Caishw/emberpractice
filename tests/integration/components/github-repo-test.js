import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-repo', 'Integration | Component | github repo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  const repo = Ember.Object.create(
    {
      forks_count : 0,
      watchers_count : 45,
      name : 'repop'
    }
  );
  this.set('repo', repo);
  this.render(hbs`{{github-repo repo=repo}}`);

  assert.equal(this.$().text().trim(), '( Fork:   Watchers: )');

  // Template block usage:
  this.render(hbs`
    {{#github-repo repo=repo}}
      template block text
    {{/github-repo}}
  `);

  assert.equal(this.$().text().trim(), '( Fork:   Watchers: )');
});
