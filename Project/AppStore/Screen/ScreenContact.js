import { createStackNavigator } from 'react-navigation-stack';
import Contact from '../Component/Contact/Contact.js';

const ScreenContact = createStackNavigator({
    Contact: {
        screen: Contact,
        navigationOptions: {
            header: null,
        }
    }
});

export default ScreenContact;