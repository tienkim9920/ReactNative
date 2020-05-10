import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';

const { height } = Dimensions.get('window');
export default class ProductDetail extends React.Component {

  render(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Product Detail
            </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: height / 1,
        backgroundColor: '#fff',
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1},
    },
});