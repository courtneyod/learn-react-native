import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import firebase from 'firebase';
import Button from './common/Button';
import Card from './Card';
import CardSection from './common/CardSection';
import Spinner from './common/Spinner';
import Input from './common/Input';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      error: '',
      loading: false,
    }
  }
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch((error) => {
        console.log(error.message, 'error from signing in')
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginSuccess(response) {
    console.log(response, 'success for signing in')
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail(error) {
    this.setState({ error: error.message, loading: false });
  }

  renderButton() {
    if(this.state.loading){
      return <Spinner size="small" />;
    } else  {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Login
        </Button>
      );
    }
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
              value={ this.state.email }
              onChangeText={text => this.setState({ email: text })}
          />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry={ true }
              placeholder='password'
              label='Password'
              value={ this.state.password }
              onChangeText={text => this.setState({ password: text })}
            />
          </CardSection>

          <Text style={ styles.errorTextStyle }>
            { this.state.error }
          </Text>

          <CardSection>
            { this.renderButton() }
          </CardSection>
        </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})