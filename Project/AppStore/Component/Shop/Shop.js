import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons.js';

import HomeView from '../Home/HomeView.js';
import CartView from '../Cart/CartView.js';
import Contact from '../Contact/Contact.js';
import Account from '../Account/NavAccount.js';

export default class Shop extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }
  render(){
    return(
        <TabNavigator tabBarStyle={{ height: 60, overflow: 'hidden' }}>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="Home"
                titleStyle={{paddingBottom: 2, fontSize: 11}}
                renderIcon={() => <Icon name='ios-home' size={33} style={styles.unSelect} />}
                renderSelectedIcon={() => <Icon name='ios-home' size={33} style={styles.select} />}
                onPress={() => this.setState({ selectedTab: 'home' })}>
                <HomeView />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'cart'}
                title='Cart'
                titleStyle={{paddingBottom: 2, fontSize: 11}}
                renderIcon={() => <Icon name='ios-cart' size={33} style={styles.unSelect} />}
                renderSelectedIcon={() => <Icon name='ios-cart' size={33} style={styles.select} />}
                onPress={() => this.setState({ selectedTab: 'cart' })}>
                <CartView />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'contact'}
                title="Contact"
                titleStyle={{paddingBottom: 2, fontSize: 11}}
                renderIcon={() => <Icon name='ios-mail' size={33} style={styles.unSelect} />}
                renderSelectedIcon={() => <Icon name='ios-mail' size={33} style={styles.select} />}
                onPress={() => this.setState({ selectedTab: 'contact' })}>
                <Contact />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'account'}
                title="Account"
                titleStyle={{paddingBottom: 2, fontSize: 11}}
                renderIcon={() => <Icon name='ios-contact' size={33} style={styles.unSelect} />}
                renderSelectedIcon={() => <Icon name='ios-contact' size={33} style={styles.select} />}
                onPress={() => this.setState({ selectedTab: 'account' })}>
                <Account />
            </TabNavigator.Item>
        </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7BFBFF',
  },
  text: {
    marginTop: 40,
  },
  select: {
    color: '#147efb',
  },
  unSelect: {
    color: '#A19C9C',
    paddingTop: 30,
  }
})