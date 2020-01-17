/**
 * 首页
 * @flow
 */

import React, {Component} from 'react';

import {
  StyleSheet,
  View,Text,
  Image,
} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import MyHome from "./MyHome";
import Setting from "./Setting";
import Icon from 'react-native-vector-icons/AntDesign';


export default class HomePage extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }


  render() {
    const TabNavigator = createBottomTabNavigator({
      Home: {
        screen: MyHome,
        navigationOptions: {
          tabBarLabel: "首页",
          tabBarIcon: ({focused, tintColor}) => (
            <Icon name={'home'} size={25} color={focused ? '#3aacff': '#e1e0e1'} />
          ),
          header: null,
        },
      },
      Setting: {
        screen: Setting,
        navigationOptions: {
          tabBarLabel: "个人中心",
          tabBarIcon: ({focused, tintColor}) => (
            <Icon name={'setting'} size={25} color={focused ? '#3aacff': '#e1e0e1'} />
          ),

        },
      },
    }, {
      /* 主屏幕的标题配置现在在这里 */
      //headerMode: 'none',
      navigationOptions: ({navigation}) => ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#f4511e',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // header: null,
      })
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
  },
  tabBarIconStyle: {
    width: 30,
    height: 30,
  }
})
