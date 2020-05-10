import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import avt1 from '../../../assets/TopImage1.jpg';

const { height } = Dimensions.get('window');
export default class ListCategory extends React.Component {

    goBackHome = () => {
        this.props.navigation.goBack();
    }

  render(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.textHeader}>Wearing a Clothe</Text>
              <TextInput
                style={styles.input}
                placeholder="What do you want to buy?"  />
            </View>
            <View style={styles.wrapper}>
                <View style={styles.headerTitle}>
                    <TouchableOpacity onPress={this.goBackHome}>
                        <Icon name='ios-arrow-back' size={50} color='#00C9FF' style={{marginLeft: 1,}} />
                    </TouchableOpacity>
                    <Text style={styles.txtHeaderTitle}>List Category</Text>
                </View>
                <ScrollView>
                    <View style={styles.body}>
                        <Image source={avt1} style={{width: 110, height: 150}}/>
                        <View style={styles.groupContent}>
                            <Text style={styles.productDetail}>Áo Khoác Hàn Quốc</Text>
                            <Text style={{fontSize: 18, color: '#FE2E2E', paddingTop: 12,}}>545.000đ</Text>
                            <Text style={{fontSize: 18, paddingTop: 12,}}>Material Cotton</Text>
                            <View style={{paddingTop: 12, flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={{fontSize: 18,}}>Color</Text>
                                <View style={{width: 20, height: 20, backgroundColor: 'black', borderRadius: 50, }} />
                                <TouchableOpacity>
                                    <Text style={{fontSize: 18, color: '#FE2E2E', textTransform: "uppercase"}}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Image source={avt1} style={{width: 110, height: 150}}/>
                        <View style={styles.groupContent}>
                            <Text style={styles.productDetail}>Áo Khoác Hàn Quốc</Text>
                            <Text style={{fontSize: 18, color: '#FE2E2E', paddingTop: 12,}}>545.000đ</Text>
                            <Text style={{fontSize: 18, paddingTop: 12,}}>Material Cotton</Text>
                            <View style={{paddingTop: 12, flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={{fontSize: 18,}}>Color</Text>
                                <View style={{width: 20, height: 20, backgroundColor: 'black', borderRadius: 50, }} />
                                <TouchableOpacity>
                                    <Text style={{fontSize: 18, color: '#FE2E2E', textTransform: "uppercase"}}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Image source={avt1} style={{width: 110, height: 150}}/>
                        <View style={styles.groupContent}>
                            <Text style={styles.productDetail}>Áo Khoác Hàn Quốc</Text>
                            <Text style={{fontSize: 18, color: '#FE2E2E', paddingTop: 12,}}>545.000đ</Text>
                            <Text style={{fontSize: 18, paddingTop: 12,}}>Material Cotton</Text>
                            <View style={{paddingTop: 12, flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={{fontSize: 18,}}>Color</Text>
                                <View style={{width: 20, height: 20, backgroundColor: 'black', borderRadius: 50, }} />
                                <TouchableOpacity>
                                    <Text style={{fontSize: 18, color: '#FE2E2E', textTransform: "uppercase"}}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Image source={avt1} style={{width: 110, height: 150}}/>
                        <View style={styles.groupContent}>
                            <Text style={styles.productDetail}>Áo Khoác Hàn Quốc</Text>
                            <Text style={{fontSize: 18, color: '#FE2E2E', paddingTop: 12,}}>545.000đ</Text>
                            <Text style={{fontSize: 18, paddingTop: 12,}}>Material Cotton</Text>
                            <View style={{paddingTop: 12, flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={{fontSize: 18,}}>Color</Text>
                                <View style={{width: 20, height: 20, backgroundColor: 'black', borderRadius: 50, }} />
                                <TouchableOpacity>
                                    <Text style={{fontSize: 18, color: '#FE2E2E', textTransform: "uppercase"}}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Image source={avt1} style={{width: 110, height: 150}}/>
                        <View style={styles.groupContent}>
                            <Text style={styles.productDetail}>Áo Khoác Hàn Quốc</Text>
                            <Text style={{fontSize: 18, color: '#FE2E2E', paddingTop: 12,}}>545.000đ</Text>
                            <Text style={{fontSize: 18, paddingTop: 12,}}>Material Cotton</Text>
                            <View style={{paddingTop: 12, flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={{fontSize: 18,}}>Color</Text>
                                <View style={{width: 20, height: 20, backgroundColor: 'black', borderRadius: 50, }} />
                                <TouchableOpacity>
                                    <Text style={{fontSize: 18, color: '#FE2E2E', textTransform: "uppercase"}}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
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
      },
      wrapper: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 10,
        height: height * 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        shadowColor: 'grey',
        shadowOpacity: 0.4,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 0},  
      },
      headerTitle: {
        flexDirection: "row",
      },
      txtHeaderTitle: {
          fontSize: 25,
          textTransform: "uppercase",
          color: '#00C9FF',
          fontWeight: '300',
          letterSpacing: 2,
          marginTop: 10,
          marginLeft: 50,
      },
      body: {
        flexDirection: "row",
        borderTopColor: '#D8D8D8',
        borderTopWidth: 2,
        paddingVertical: 12,
        paddingHorizontal: 5,
        marginHorizontal: 7,
      },
      groupContent: {
          paddingHorizontal: 12,
          paddingVertical: 10,
      },
      productDetail: {
        fontSize: 18,
        color: '#BDBDBD',
        textTransform: "uppercase",
      }
});