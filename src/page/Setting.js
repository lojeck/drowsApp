/**
 * 设置
 * @flow
 */

import React, {Component} from 'react';

import {
  StyleSheet,
  View,Text

} from 'react-native';

export default class Setting extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>设置</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#fff',
  },
  tabBarIcon: {
    width: 26, height: 26,
    resizeMode: 'contain',
  },
  tabBarSelectedIcon: {
    width: 26, height: 26,
    resizeMode: 'contain',
    // tintColor:'#4caf50'
  }
})
