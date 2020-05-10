import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SignIn from './Login/SignIn.js';

const HomeStack = createStackNavigator({
  SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null
      }
    },
});

export default createAppContainer(HomeStack);