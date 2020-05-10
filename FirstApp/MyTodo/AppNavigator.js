import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import tabLogin from './Screen/Login';
import tabHome from './Screen/Home';

const screens = {
    Login: {
        screen: tabLogin,
        navigationOptions: {
            header: null,
        }
    },
    Home: {
        screen: tabHome,
        navigationOptions: {
            header: null,
        }
    }
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);