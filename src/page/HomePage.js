/**
 * 首页
 * @flow
 */

import React, {Component} from 'react';

import {
  StyleSheet,
  View,Text

} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import MyHome from "./MyHome";
import Setting from "./Setting";


export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const TabNavigator = createBottomTabNavigator({
      Home: MyHome,
      Settings: Setting,
    });

    const TabHome = createAppContainer(TabNavigator);
    return (
      <TabHome />
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
