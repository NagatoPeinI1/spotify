const SpotifyDetails = () => {
  return {
    baseUrl: 'https://api.spotify.com/v1',
    authUrl: 'https://accounts.spotify.com/api/token',
    categoriesURL: 'https://api.spotify.com/v1/browse/categories',
    newReleaseURL: 'https://api.spotify.com/v1/browse/new-releases',
    featuredPlaylistsURL: 'https://api.spotify.com/v1/browse/featured-playlists',
    clientId: '<enter your ID>',
    clientSecret: '<enter your secret>'
  }
}

export { SpotifyDetails };