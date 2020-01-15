/**
 * @format
 */

import {AppRegistry} from 'react-native';
import codePush from "react-native-code-push";
import App from './App';
import {name as appName} from './app.json';
let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
AppRegistry.registerComponent(appName, () => codePush(codePushOptions)(App));
