import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { SpotifyDetails } from '../../../config';
import axios from 'axios';
const spotify = SpotifyDetails();

// authUrl
// genresCategoryURL
// newReleaseURL
// featuredPlaylistsURL

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
      token: ''
    };
  }

  async componentDidMount() {

    /**
     *  Attempting too create different function
     */
    // const _tokenDetails = await this.getToken();
    // const _newReleases = await this.getNewReleases();
    // const _featuredPlaylist = await this.getfeaturedPlaylist();
    // const _Categories = await this.getCategories()

    const _tokenDetails = await this.getRequestDataFromSpotify(spotify.authUrl, 'POST', 'Basic ' + btoa(spotify.clientId + ':' + spotify.clientSecret), ['data', 'grant_type=client_credentials']);
    const token = 'Bearer ' + _tokenDetails.access_token;
    console.log(" token :::: ", _tokenDetails.access_token)
    const _newReleases = await this.getRequestDataFromSpotify(spotify.newReleaseURL, 'GET', token, ['params', { country: 'IN', limit: 12 }]);
    const _featuredPlaylist = await this.getRequestDataFromSpotify(spotify.featuredPlaylistsURL, 'GET', token, ['params', { country: 'IN', locale: 'sv_IN', limit: 12 }]);
    const _Categories = await this.getRequestDataFromSpotify(spotify.categoriesURL, 'GET', token, ['params', { country: 'IN', locale: 'sv_IN', limit: 12 }])


    // If we are using Generinc Request Spotify function
    this.setState({
      newReleases: _newReleases.albums.items,
      playlists: _featuredPlaylist.playlists.items,
      categories: _Categories.categories.items,
      token: _tokenDetails.access_token
    })
  }

  /**
   * 
   * @param {STRING} url 
   * @param {STRING} reqType 
   * @param {STRING} authData 
   * @param {ARRAY} params 
   * @returns {JSON}
   */
  getRequestDataFromSpotify = (url, reqType, authData, params) => {
    return new Promise((resolve, reject) => {
      axios(`${url}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': authData
        },
        [params[0]]: params[1],
        method: reqType
      }).then((response) => {
        if (response.data && response.status === 200) resolve(response.data)
        else resolve()
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  }


  /**
   * 
   * Individual functions 
   *  - Getting Token
   *  - New Release
   *  - Playlist
   *  - Categories
   */

  // getToken = () => {
  //   return new Promise((resolve, reject) => {
  //     axios(`${spotify.authUrl}`, {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         'Authorization': 'Basic ' + btoa(spotify.clientId + ':' + spotify.clientSecret)
  //       },
  //       data: 'grant_type=client_credentials',
  //       method: 'POST'
  //     }).then((response) => {
  //       if(response.data && response.status === 200) {
  //         this.setState({
  //           token: response.data.access_token
  //         })
  //         resolve(response.data)
  //       }
  //       else reject()
  //     })
  //   })
  // }

  // getNewReleases = () => {
  //   return new Promise((resolve, reject) => {
  //     axios(`${spotify.newReleaseURL}`, {
  //       method: 'GET',
  //       params: { country: 'IN', limit: 12 },
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization' : 'Bearer ' + this.state.token}
  //     }).then((response) => {
  //       if(response.data && response.status === 200) {
  //         this.setState({
  //           newReleases: response.data.albums.items
  //         })
  //         resolve(response.data)
  //       }
  //       else reject()
  //     })
  //   })
  // }

  // getfeaturedPlaylist = () => {
  //   return new Promise((resolve, reject) => {
  //     axios(`${spotify.featuredPlaylistsURL}`, {
  //       method: 'GET',
  //       params: { country: 'IN', locale: 'sv_IN', limit: 12 },
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded','Authorization' : 'Bearer ' + this.state.token}
  //     }).then((response) => {
  //       if(response.data && response.status === 200) {
  //         this.setState({
  //           playlists: response.data.playlists.items
  //         })
  //         resolve(response.data.playlists.items)
  //       }
  //       else reject()
  //     })
  //   })
  // }

  // getfeaturedPlaylist = () => {
  //   return new Promise((resolve, reject) => {
  //     axios(`${spotify.featuredPlaylistsURL}`, {
  //       method: 'GET',
  //       params: { country: 'IN', locale: 'sv_IN', limit: 12 },
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded','Authorization' : 'Bearer ' + this.state.token}
  //     }).then((response) => {
  //       if(response.data && response.status === 200) {
  //         this.setState({
  //           playlists: response.data.playlists.items
  //         })
  //         resolve(response.data.playlists.items)
  //       }
  //       else reject()
  //     })
  //   })
  // }


  //     getCategories = () => {
  //   return new Promise((resolve, reject) => {
  //     axios(`${spotify.categoriesURL}`, {
  //       method: 'GET',
  //       params: { country: 'IN', locale: 'sv_IN', limit: 12 },
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded','Authorization' : 'Bearer ' + this.state.token}
  //     }).then((response) => {
  //       if(response.data && response.status === 200) {
  //         this.setState({
  //           categories: response.data.categories.items
  //         })
  //         resolve(response.data.categories.items)
  //       }
  //       else reject()
  //     })
  //   })
  // }


  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
