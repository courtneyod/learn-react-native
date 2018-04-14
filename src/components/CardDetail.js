import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import Card from './Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

export default class CardDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props, 'popopopo', this.props.record.title)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <View style={ styles.thumbnailContainerStyle }>
            <Image
              style={ styles.thumbnailStyle }
              source={{ uri: this.props.record.thumbnail_image }}
            />
          </View>
          <View style={ styles.headerContentStyle } >
            <Text style={ styles.headerTextStyle }>{ this.props.record.title }</Text>
            <Text> { this.props.record.artist }</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
            style={ styles.imageStyle }
            source={{ uri: this.props.record.image }}
          />
        </CardSection>

        <CardSection>
          <Button
            onPress={() => {Linking.openURL(this.props.record.url)}}>
            Buy Now
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
})