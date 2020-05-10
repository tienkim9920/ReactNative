import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Component/Home/Home.js';

const ScreenHome = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    }
});

export default ScreenHome;