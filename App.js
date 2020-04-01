/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import Routes from "./src/common/Routes";
import CodePush from "react-native-code-push";
type Props = {};
export default class App extends Component<Props> {


  componentDidMount() {
    CodePush.sync(
      {
        updateDialog: false,
        installMode: CodePush.InstallMode.ON_NEXT_RESTART
      },
    );
  }

  render() {
    const AppNavigator = createStackNavigator({ ...Routes },{
      initialRouteName: "WelcomePage",
    });
    const App = createAppContainer(AppNavigator);
    return (
      <App />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
