/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Drawer from './src/screen/Dra';
import Scdd from './src/screen/Scdd';
import Ano from './src/screen/Ano';

AppRegistry.registerComponent(appName, () => Drawer);
