import { createStackNavigator } from 'react-navigation-stack';
import Account from '../Component/Account/Menu/Menu.js';
import Authentication from '../Component/Account/Authentication/Authentication.js';
import ChangeInfo from '../Component/Account/ChangeInfo/ChangeInfo.js';
import OrderHistory from '../Component/Account/OrderHistory/OrderHistory.js';

const ScreenAccout = createStackNavigator({
    Account: {
        screen: Account,
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
});

export default ScreenAccout;