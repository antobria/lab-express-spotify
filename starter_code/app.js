var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
var clientId = 'bd9f4d19bc2b4a01a7acc32f85ae5379',
    clientSecret = '50c1eb87cf884b7787e83d9f862eddb6';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});
