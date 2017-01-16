import { test } from 'qunit';
import moduleForAcceptance from 'hotel-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home page');

test('visiting /home-page', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
