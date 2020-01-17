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
    // 热更新检测
    // CodePush.sync(
    //   {
    //     updateDialog: {
    //       optionalIgnoreButtonLabel: '下次再说',
    //       optionalInstallButtonLabel: '马上体验',
    //       optionalUpdateMessage: '新版本来袭，是否更新',
    //       title: '更新提示',
    //       mandatoryUpdateMessage: '噢，版本中有一些大改动，不得不更新',
    //       mandatoryContinueButtonLabel: '立即更新'
    //     },
    //     installMode: CodePush.InstallMode.IMMEDIATE
    //   },
    //   this.codePushStatusDidChange.bind(this),
    //   this.codePushDownloadDidProgress.bind(this)
    // );
  }

  // codePushStatusDidChange(syncStatus) {
  //   switch (syncStatus) {
  //     case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
  //       this.setState({syncMessage: "Checking for update."});
  //       break;
  //     case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
  //       this.setState({syncMessage: "Downloading package."});
  //       break;
  //     case CodePush.SyncStatus.AWAITING_USER_ACTION:
  //       this.setState({syncMessage: "Awaiting user action."});
  //       break;
  //     case CodePush.SyncStatus.INSTALLING_UPDATE:
  //       this.setState({syncMessage: "Installing update."});
  //       break;
  //     case CodePush.SyncStatus.UP_TO_DATE:
  //       this.setState({syncMessage: "App up to date.", progress: false});
  //       break;
  //     case CodePush.SyncStatus.UPDATE_IGNORED:
  //       this.setState({syncMessage: "Update cancelled by user.", progress: false});
  //       break;
  //     case CodePush.SyncStatus.UPDATE_INSTALLED:
  //       this.setState({syncMessage: "Update installed and will be applied on restart.", progress: false});
  //       break;
  //     case CodePush.SyncStatus.UNKNOWN_ERROR:
  //       this.setState({syncMessage: "An unknown error occurred.", progress: false});
  //       break;
  //   }
  // }
  //
  // codePushDownloadDidProgress(progress) {
  //   this.setState({progress});
  // }

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
