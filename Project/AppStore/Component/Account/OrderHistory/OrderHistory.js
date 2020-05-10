import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons.js';

const { height } = Dimensions.get('window');
export default class OrderHistory extends React.Component {

  gobackMain = () => {
    this.props.navigation.goBack();
  }
  render(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.gobackMain}>
                <Icon name='ios-arrow-back' size={50} color='white' style={{marginLeft: 8, paddingTop: 10,}} />
              </TouchableOpacity>
              <Text style={styles.textHeader}>Order History</Text>
            </View>
            <View style={styles.body}>
              <ScrollView>
                <View style={styles.groupRow}>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Order id: </Text>
                    <Text style={{color: '#00C9FF', fontSize: 16,}}>ORD001</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Order Time</Text>
                    <Text style={{color: 'red', fontSize: 16,}}>2020-05-03 08:30:08</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Status</Text>
                    <Text style={{color: '#00C9FF', fontSize: 16,}}>Pending</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Total: </Text>
                    <Text style={{color: 'red', fontSize: 16,}}>500.000đ</Text>
                  </View>
                </View>
                <View style={styles.groupRow}>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Order id: </Text>
                    <Text style={{color: '#00C9FF', fontSize: 16,}}>ORD001</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Order Time</Text>
                    <Text style={{color: 'red', fontSize: 16,}}>2020-05-03 08:30:08</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Status</Text>
                    <Text style={{color: '#00C9FF', fontSize: 16,}}>Pending</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Total: </Text>
                    <Text style={{color: 'red', fontSize: 16,}}>500.000đ</Text>
                  </View>
                </View>
                <View style={styles.groupRow}>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Order id: </Text>
                    <Text style={{color: '#00C9FF', fontSize: 16,}}>ORD001</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Order Time</Text>
                    <Text style={{color: 'red', fontSize: 16,}}>2020-05-03 08:30:08</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Status</Text>
                    <Text style={{color: '#00C9FF', fontSize: 16,}}>Pending</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Total: </Text>
                    <Text style={{color: 'red', fontSize: 16,}}>500.000đ</Text>
                  </View>
                </View>
                <View style={styles.groupRow}>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Order id: </Text>
                    <Text style={{color: '#00C9FF', fontSize: 16,}}>ORD001</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Order Time</Text>
                    <Text style={{color: 'red', fontSize: 16,}}>2020-05-03 08:30:08</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Status</Text>
                    <Text style={{color: '#00C9FF', fontSize: 16,}}>Pending</Text>
                  </View>
                  <View style={styles.setRow}>
                    <Text style={styles.txtOrder}>Total: </Text>
                    <Text style={{color: 'red', fontSize: 16,}}>500.000đ</Text>
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
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 15,
    backgroundColor: '#00C9FF',
  },
  textHeader: {
    fontSize: 32,
    fontWeight: '300',
    color: 'white',
    textAlign: "center",
    flex: 1,
    marginTop: 19,
    marginRight: 13,
  },
  groupRow: {
    height: height / 4.3,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 4,
    shadowColor: '#D8D8D8',
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0},
  },
  txtOrder: {
    color: '#6E6E6E',
    fontSize: 16,
  },
  setRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
  }
})