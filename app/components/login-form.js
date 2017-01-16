import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    login() {
      let { email, password } = this.getProperties('email', 'password');

      this.get('session').authenticate('authenticator:oauth2', email, password);
    }
  }
});
