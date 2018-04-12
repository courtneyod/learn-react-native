import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class Header extends React.Component {
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

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    return (
      <View>
        <Text>{ this.props.dataSource }</Text>
      </View>
    );
  }
}