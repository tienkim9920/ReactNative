import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import TopImage1 from '../../../assets/TopImage1.jpg';
import TopImage2 from '../../../assets/TopImage2.jpg';
import TopImage3 from '../../../assets/TopImage3.jpg';
import TopImage4 from '../../../assets/TopImage4.jpg';

const { height } = Dimensions.get('window');
export default class TopProduct extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.text}>
                        Top Product
                    </Text>
                    <View style={styles.Flex}>
                        <TouchableOpacity style={styles.ComboBox}>
                            <View style={styles.wrapper}>
                                <Image source={TopImage1} 
                                style={styles.img} />
                                <View style={styles.groupBox}>
                                    <Text style={styles.title}>Thu Đông</Text>
                                    <View style={styles.comboBox}>
                                        <Text style={styles.txtComboBox}>900.000đ</Text>
                                        <TouchableOpacity>
                                            <Text style={styles.buy} 
                                            onPress={() => {Alert.alert('Cảm Ơnn Bạn Đã Mua')}} >MUA +</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ComboBox}>
                            <View style={styles.wrapper}>
                                <Image source={TopImage2} 
                                style={styles.img} />
                                <View style={styles.groupBox}>
                                    <Text style={styles.title}>Cá Tính</Text>
                                    <View style={styles.comboBox}>
                                        <Text style={styles.txtComboBox}>500.000đ</Text>
                                        <TouchableOpacity>
                                            <Text style={styles.buy} 
                                            onPress={() => {Alert.alert('Cảm Ơnn Bạn Đã Mua')}} >MUA +</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Flex}>
                        <TouchableOpacity style={styles.ComboBox}>
                            <View style={styles.wrapper}>
                                <Image source={TopImage3} 
                                style={styles.img} />
                                <View style={styles.groupBox}>
                                    <Text style={styles.title}>Lịch Lãm</Text>
                                    <View style={styles.comboBox}>
                                        <Text style={styles.txtComboBox}>700.000đ</Text>
                                        <TouchableOpacity>
                                            <Text style={styles.buy} 
                                            onPress={() => {Alert.alert('Cảm Ơnn Bạn Đã Mua')}} >MUA +</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ComboBox}>
                            <View style={styles.wrapper}>
                                <Image source={TopImage4} 
                                style={styles.img} />
                                <View style={styles.groupBox}>
                                    <Text style={styles.title}>Lãng Tử</Text>
                                    <View style={styles.comboBox}>
                                        <Text style={styles.txtComboBox}>800.000đ</Text>
                                        <TouchableOpacity>
                                            <Text style={styles.buy} 
                                            onPress={() => {Alert.alert('Cảm Ơnn Bạn Đã Mua')}} >MUA +</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.9,
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
        width: 130,
        height: 200,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    text: {
        fontSize: 20,
        textTransform: "uppercase",
        marginHorizontal: 12,
        paddingTop: 5,
        letterSpacing: 1,
        color: 'gray',
        fontWeight: '300',
    },
    wrapper: {
        backgroundColor: '#fff',
        borderRadius: 7,
        shadowRadius: 10,
        padding: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3},
        
    },
    ComboBox: {
        paddingHorizontal: 11,
        paddingRight: 20,
        flexDirection: "row",
        marginTop: 12,
        
    },
    groupBox: {
        width: '100%',
        paddingHorizontal: 5
    },
    title: {
        fontSize: 16,
        textAlign: "center",
        textTransform: "uppercase",
        justifyContent: "center",
        color: '#fc5f5f',
    },
    buy: {
        fontSize: 16,
        color: '#4094f9',
    },
    comboBox: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 5,
    },
    txtComboBox: {
        fontSize: 16,
        color: '#bab8b8',
    },
    Flex: {
        flexDirection: "row",
        marginBottom: 7,
    }
})