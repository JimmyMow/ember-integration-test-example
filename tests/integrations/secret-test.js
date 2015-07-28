import Ember from 'ember';
import startApp from 'vault/tests/helpers/start-app';
var App;

module('Integration - Secret', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('by default the image is not shown', function() {
  visit('/');
  andThen(function() {
    equal(find('.suprise').length, 0);
  });
});

test('the image shows up when the password is correct', function() {
  visit('/');
  fillIn('input.secret-value', 'meow');
  click('button.check-password');
  andThen(function() {
    equal(find('.suprise').length, 1);
  });

  fillIn('input.secret-value', 'not meow');
  click('button.check-password');
  andThen(function() {
    equal(find('.suprise').length, 0);
  });
});
