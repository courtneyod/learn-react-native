import React, { Component } from 'react';
import { StyleSheet, View, AppRegistry, ScrollView } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/common/Header';
import Button from './src/components/common/Button';
import Spinner from './src/components/common/Spinner';
import PhotoList from './src/components/PhotoList';
import Auth from './src/components/Auth';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    }
  }

  componentDidMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyAznqwJo4PHLhY3LH1Y6U2LtaNFfUVeRA0",
        authDomain: "pumped-ce395.firebaseapp.com",
        databaseURL: "https://pumped-ce395.firebaseio.com",
        projectId: "pumped-ce395",
        storageBucket: "pumped-ce395.appspot.com",
        messagingSenderId: "308398660713"
      });

      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({ loggedIn: true });
        } else {
          this.setState( { loggedIn: false });
        }
      });
  }

  renderContent(){
    switch(this.state.loggedIn) {
      case true:
        return (
          <ScrollView>
            {/* <PhotoList></PhotoList> */}
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </ScrollView>
      );
      case false:
        return <LoginForm></LoginForm>;
      default:
        return (
          <ScrollView>
            <Spinner size='large' />
          </ScrollView>
        );
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header headerText={ 'Pumped' }/>
        { this.renderContent() }
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