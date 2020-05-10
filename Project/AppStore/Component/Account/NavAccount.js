import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Menu from './Menu/Menu.js';
import Authentication from './Authentication/Authentication.js';
import ChangeInfo from './ChangeInfo/ChangeInfo.js';
import OrderHistory from './OrderHistory/OrderHistory.js';

const ScreenAccout = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: {
            header: null,
        }
    },
    ChangeInfo: {
        screen: ChangeInfo,
        navigationOptions: {
            header: null,
        }
    },
    OrderHistory: {
        screen: OrderHistory,
        navigationOptions: {
            header: null,
        }
    },
    Authentication: {
        screen: Authentication,
        navigationOptions: {
            header: null,
        }
    },
});

export default createAppContainer(ScreenAccout);