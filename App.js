import React, { Component } from 'react';
import { StyleSheet, View, AppRegistry } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/common/Header';
import PhotoList from './src/components/PhotoList';
import Auth from './src/components/Auth';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyAznqwJo4PHLhY3LH1Y6U2LtaNFfUVeRA0",
        authDomain: "pumped-ce395.firebaseapp.com",
        databaseURL: "https://pumped-ce395.firebaseio.com",
        projectId: "pumped-ce395",
        storageBucket: "pumped-ce395.appspot.com",
        messagingSenderId: "308398660713"
      })
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header headerText={ 'Pumped' }/>
        <LoginForm></LoginForm>
        {/* <PhotoList></PhotoList> */}
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