import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class CardDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props, 'popopopo', this.props.record.title)
  }

  render() {
    return (
      <Card>
        <View style={styles.containerStyle}>
        {/* <CardSection> */}
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
        </View>
        {/* </CardSection> */}
        <View style={styles.containerStyle}>
          <Image
            style={ styles.imageStyle }
            source={{ uri: this.props.record.image }}
          />
        </View>
        <View style={styles.containerStyle}>
          <Button
            onPress={() => {Linking.openURL(this.props.record.url)}}>
            Buy Now
          </Button>
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
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
    marginRight: 10
  },
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
})