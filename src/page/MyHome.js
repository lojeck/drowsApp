/**
 *设置
 * @flow
 */

import React, {Component} from 'react';

import {
  StyleSheet,
  View, Text, TouchableOpacity, TouchableHighlight, FlatList
} from 'react-native';
import codePush from "react-native-code-push";
import Device_Info from 'react-native-device-info';


export default class MyHome extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      syncMessage: '更新未触发', // 功能模块列表
    };
  }


  separator = () => {
    return (
      <View style={{width: 1, backgroundColor: '#eee'}}/>
    )
  };

  headerList = () => {
    return (<View>
      {/*<Text>2020年3月27日18:34:02</Text>*/}
      <Text>{this.state.syncMessage}</Text>
      <Text>{Device_Info.getVersion()}</Text>
    </View>);
  };

  test = (key) => {
    if (key === '检查更新') {
      codePush.sync(
        {
          updateDialog: {
            appendReleaseDescription: true,
            optionalIgnoreButtonLabel: '下次再说',
            optionalInstallButtonLabel: '马上体验',
            // optionalUpdateMessage: '新版本来袭，是否更新',
            title: '更新提示',
            mandatoryUpdateMessage: '噢，版本中有一些大改动，不得不更新',
            mandatoryContinueButtonLabel: '立即更新'
          },
          installMode: codePush.InstallMode.IMMEDIATE
        },
        this.codePushStatusDidChange.bind(this),
        this.codePushDownloadDidProgress.bind(this)
      );
    }
  };
  
  codePushStatusDidChange(syncStatus) {
    switch (syncStatus) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({syncMessage: "Checking for update."});
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({syncMessage: "Downloading package."});
        break;
      case codePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({syncMessage: "Awaiting user action."});
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({syncMessage: "Installing update."});
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        this.setState({syncMessage: "App up to date.", progress: false});
        break;
      case codePush.SyncStatus.UPDATE_IGNORED:
        this.setState({syncMessage: "Update cancelled by user.", progress: false});
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({syncMessage: "Update installed and will be applied on restart.", progress: false});
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        this.setState({syncMessage: "An unknown error occurred.", progress: false});
        break;
    }
  }
  
  codePushDownloadDidProgress(progress) {
    this.setState({progress});
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{key: '检查更新'}, {key: '2020年1月17日15:45:45'}]}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.button} onPress={() => {
              this.test(item.key)
            }}>
              <Text>{item.key}</Text>
            </TouchableOpacity>)}
          ListHeaderComponent={this.headerList}
          ItemSeparatorComponent={this.separator}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#3aacff',
    borderRadius: 5,
  },
  separator: {
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
});
