import React, { Component } from 'react';
import { StyleSheet, View, AppRegistry } from 'react-native';
import Header from './src/components/Header'
import PhotoList from './src/components/PhotoList'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={ 'Pumped' }/>
        <PhotoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('albums', () => App);