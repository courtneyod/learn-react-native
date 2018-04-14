import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginForm from './LoginForm';

export default class Auth extends Component {
  render() {
    return (
      <View>
        <LoginForm></LoginForm>
      </View>
    )
  }
}