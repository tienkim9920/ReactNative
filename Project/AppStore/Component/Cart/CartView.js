import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Cart from './Cart.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';

const HomeView = createStackNavigator({
    Cart: {
        screen: Cart,
        navigationOptions: {
            header: null,
        }
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: {
            header: null,
        }
    }
});

export default createAppContainer(HomeView);