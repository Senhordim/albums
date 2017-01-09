import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = { albums: []};

  componentWillMount(){
    axios.get('https://albumsmusiclist.herokuapp.com/api/v1/albums')
      .then(response => this.setState({ albums: response.data }))
  }

  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render(){
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
