import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import CardDetail from './CardDetail'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentWillMount() {
    return fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((JSONresponse) => {
        console.log(JSONresponse, "HERER")
        this.setState({
          isLoading: false,
          dataSource: JSONresponse,
        }, function () {

        });

      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        })
        console.error(error);
      });
  }

  renderAlbums() {
    return this.state.dataSource.map(album => {
      return <CardDetail key={ album.title } record={ album } ></CardDetail>
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}