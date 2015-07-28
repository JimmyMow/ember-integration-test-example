import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    checkPassword: function() {
      this.set('unlocked', this.get('secret') === 'meow');
    }
  }
});
