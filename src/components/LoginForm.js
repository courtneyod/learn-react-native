import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
// import firebase from 'firebase';
import Button from './common/Button';
import Card from './Card';
import CardSection from './common/CardSection';
import Input from './common/Input';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: ''
    }
  }
  onButtonPress() {
    const { email, password } = this.state;
    // firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <CardSection>
            <Input
              secureTextEntry={ false }
              placeholder='user@gmail.com'
              label='Email'
              value={ this.state.value }
              onChangeText={ text => this.setState({ email: text })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry={ true }
              placeholder='password'
              label='Password'
              value={ this.state.value }
              onChangeText={text => this.setState({ password: text })}
            />
          </CardSection>

          <CardSection>
            <Button onPress={ this.onButtonPress.bind(this) }>
              Login
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})