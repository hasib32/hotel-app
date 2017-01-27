import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
	serverTokenEndpoint: 'http://app.dark.web/auth/user',

	makeRequest: function(url, data, headers) {
    data.userType = 'basic';

    return this._super(url, data, headers);
  }
});
