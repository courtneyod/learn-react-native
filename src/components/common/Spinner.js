import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View style={ styles.spinnerStyle }>
        <ActivityIndicator size={ this.props.size || 'large'} />
      </View>
    )
  }
}

 const styles = StyleSheet.create({
   spinnerStyle: {
     flex: 1,
     justifyContent: 'center'
   }
 })