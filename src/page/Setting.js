/**
 * 设置
 * @flow
 */

import React, {Component} from 'react';

import {
  StyleSheet,
  View,Text,ProgressBarAndroid,
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
        <Text>33333333333333333333333333333333</Text>
        {/*<View style={styles.container}>*/}
        {/*  <ProgressBarAndroid />*/}
        {/*  <ProgressBarAndroid styleAttr="Horizontal" />*/}
        {/*  <ProgressBarAndroid styleAttr="Horizontal" color="#2596F3" />*/}
        {/*  <ProgressBarAndroid*/}
        {/*    styleAttr="Horizontal"*/}
        {/*    indeterminate={false}*/}
        {/*    progress={0.8}*/}
        {/*  />*/}
        {/*</View>*/}
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
});
