import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons.js';

import Collection from './Component/Collection';
import Category from './Component/Category';
import TopProduct from './Component/TopProduct';

export default class Home extends React.Component {

  gotoListCategory = () => {
    this.props.navigation.push('ListCategory');
  }
  render(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.textHeader}>Wearing Clothes</Text>
              <TextInput
                style={styles.input}
                placeholder="What do you want to buy?"  />
            </View>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <ScrollView>
                <TouchableOpacity >
                  <Collection />
                </TouchableOpacity>
                  <Category navigator={this.gotoListCategory}/>
                  <TopProduct />
              </ScrollView>
            </TouchableWithoutFeedback>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
  },
  textHeader: {
    textAlign: "center",
    fontSize: 23,
    fontWeight: '300',
    textTransform: "uppercase",
    letterSpacing: 2,
    color: '#fff'
  },
  header: {
    paddingVertical: 7,
    paddingTop: 28,
    backgroundColor: '#00C9FF',
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
  }
})