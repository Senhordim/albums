import React, { Component } from 'react';
import {View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

  state = { albums: []};

  componentWillMount(){
    axios.get('https://albumsmusiclist.herokuapp.com/albums')
      .then(response => this.setState({ albums: response.data }))

  }

  renderAlbums(){
    return this.state.albums.map(album =>
      <Text key={album.title}>{album.title}</Text>
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
