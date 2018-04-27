import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { itemsFetchData, selectItem } from '../actions/items';

import CardDetail from './CardDetail';

class PhotoList extends Component {
  componentWillMount() {
    this.props.fetchData('http://rallycoding.herokuapp.com/api/music_albums');
  }

  renderRow(item) {
    return <CardDetail item={ item } />;
  }

  render() {
    if (this.props.hasErrored) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <Text>An Error has occured</Text>
        </View>
      );
    }
    if (this.props.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    return (
      <ScrollView>
        <ListView
          enableEmptySections={true}
          dataSource={ this.props.dataSource }
          renderRow={ this.renderRow }
        />
      </ScrollView>
    );
  }
}

const ds = new ListView.DataSource(
  { rowHasChanged: (r1, r2) => r1 !== r2 }
);

const mapStateToProps = (state) => {
  console.log(state, 'PhotoList')
  return {
    items: state.items,
    dataSource: ds.cloneWithRows(state.items),
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    selectItem: dispatch(selectItem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);