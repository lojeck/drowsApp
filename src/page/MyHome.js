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

export default class MyHome extends Component {
  constructor(props) {
    super(props);
  }


  separator = () => {
    return (
      <View style={{width: 1, backgroundColor: '#eee'}}/>
    )
  };

  test = (key) => {
    if (key === '检查更新') {
      codePush.checkForUpdate('YnJyIZQYu5z1fkhJJcO2h5PDIfg9O7gbCmm4g').then((update) => {
        console.log(update);
        update.download();
      }
      );
    }
  };

  checkVersion = () => {

  };

  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={[{key: '检查更新'}, {key: '2'}]}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.button} onPress={() => {
              this.test(item.key)
            }}>
              <Text>{item.key}</Text>
            </TouchableOpacity>)}
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
