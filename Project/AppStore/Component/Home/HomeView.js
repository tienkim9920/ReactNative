import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './Home.js';
import ListCategory from './ListCategory/ListCategory.js';

const HomeView = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    ListCategory: {
        screen: ListCategory,
        navigationOptions: {
            header: null,
        }
    }
});

export default createAppContainer(HomeView);