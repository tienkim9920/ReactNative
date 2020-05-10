import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons.js';

import ScreenHome from './ScreenHome.js';
import ScreenCart from './ScreenCart.js';
import Shop from '../Component/Shop/Shop.js';
import ScreenContact from './ScreenContact.js';
import ScreenAccount from './SreenAccount.js';
import { View } from 'react-native';
import ScreenAccout from './SreenAccount.js';
const color = {
    ACTIVE: '#147efb',
    INACTIVE: '#ccc'
}

const AppNavigator = createStackNavigator({
    Shop: {
        screen: Shop,
        navigationOptions: {
            header: null,
        }
    },
    ScreenAccount: {
        screen: ScreenAccout,
    }
},
);

export default createAppContainer(AppNavigator);
