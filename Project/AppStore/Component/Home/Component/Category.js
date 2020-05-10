import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import banner1 from '../../../assets/banner2.jpg';
import banner2 from '../../../assets/banner.jpg';
import banner3 from '../../../assets/banner3.jpg';

const { height } = Dimensions.get('window');
export default class Category extends React.Component {

  render(){
      const { navigator } = this.props;
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                List of Category
            </Text>
            <View style={{flex: 1}}>
                <Swiper>
                    <TouchableOpacity onPress={navigator}>
                        <Image source={banner1} style={styles.img} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigator}>
                        <Image source={banner2} style={styles.img} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigator}>
                        <Image source={banner3} style={styles.img} />
                    </TouchableOpacity>
                </Swiper> 
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
    },
    wrapper: {
        marginTop: 50,
    }
})