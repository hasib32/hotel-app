import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
	serverTokenEndpoint: 'http://jetaport.dharma/oauth/access_token',

	makeRequest: function(url, data, headers) {
    data.client_id = 1;
    data.client_secret = 'NseejF2TygGIGkqo7dLHTHfT6KmzqrXsylI2Dbzg';
    data.grant_type = 'password';
    data.scope = 'admin';
    
    return this._super(url, data, headers);
  }
});
