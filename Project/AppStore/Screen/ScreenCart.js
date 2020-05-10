import { createStackNavigator } from 'react-navigation-stack';
import Cart from '../Component/Cart/Cart.js';

const ScreenCart = createStackNavigator({
    Cart: {
        screen: Cart,
        navigationOptions: {
            header: null,
        }
    }
});

export default ScreenCart;