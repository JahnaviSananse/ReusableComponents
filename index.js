/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import demo from './src/screens/demo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => demo);
