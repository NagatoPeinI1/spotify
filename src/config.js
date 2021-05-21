const SpotifyDetails = () => {
  return {
    baseUrl: 'https://api.spotify.com/v1',
    authUrl: 'https://accounts.spotify.com/api/token',
    categoriesURL: 'https://api.spotify.com/v1/browse/categories',
    newReleaseURL: 'https://api.spotify.com/v1/browse/new-releases',
    featuredPlaylistsURL: 'https://api.spotify.com/v1/browse/featured-playlists',
    clientId: 'e61b6d14893440b986a238582dbd4936',
    clientSecret: '2bde9d009bd547a7b103b1f739194b3c'
  }
}

export { SpotifyDetails };