import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import banner from '../../../assets/Korea.jpg';

const { height } = Dimensions.get('window');
export default class Collection extends React.Component {

  render(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>
                    Korea Collection
                </Text>
                <Image source={banner} style={styles.img} />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.32,
        backgroundColor: '#fff',
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1},
    },
    img: {
        width: 340,
        height: 160,
        marginTop: 12,
        marginLeft: 10,
    },
    text: {
        fontSize: 20,
        textTransform: "uppercase",
        marginHorizontal: 10,
        paddingTop: 5,
        letterSpacing: 1,
        color: 'gray',
        fontWeight: '300',
    }
})