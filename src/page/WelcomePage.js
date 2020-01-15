/**
 * 欢迎页
 * @flow
 * **/
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  InteractionManager,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native'
import HomePage from './HomePage'
import ThemeDao from '../model/dao/ThemeDao'
import SplashScreen from 'react-native-splash-screen'
import {StackActions, NavigationActions} from "react-navigation";
import CodePush from "react-native-code-push";
export default class WelcomePage extends Component {

  componentDidMount() {
    const {navigator} = this.props;
    new ThemeDao().getTheme().then((data=>{
      this.theme=data;
    }));
    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        SplashScreen.hide();
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: "HomePage" })
          ],
        });
        this.props.navigation.dispatch(resetAction);
      });
    }, 500);
  }


  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }

}
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
