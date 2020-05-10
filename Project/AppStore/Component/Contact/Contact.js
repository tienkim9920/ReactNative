import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons.js';
import Icon2 from 'react-native-vector-icons/Ionicons.js'

const { height } = Dimensions.get('window');
export default class Contact extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Wearing Clothes</Text>
            <TextInput
              style={styles.input}
              placeholder="What do you want to buy?" />
        </View>
        <MapView 
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={{
            latitude: 10.762622,
            longitude: 106.660172,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        />
        <View style={styles.contact}>
          <View style={styles.contactRow}>
            <Icon name="location-on" style={{fontSize: 36, color: '#00C9FF'}} />
            <Text style={{marginTop: 12, fontSize: 15, color: '#FA5882'}}>155 Sư Vạn Hạnh, Quận 10, TP.HCM</Text>
          </View>
          <View style={styles.contactRow}>
            <Icon name="local-phone" style={{fontSize: 36, color: '#00C9FF'}} />
            <Text style={{marginTop: 12, fontSize: 15, color: '#FA5882'}}>(+84)7 6355 7366</Text>
          </View>
          <View style={styles.contactRow}>
            <Icon name="email" style={{fontSize: 36, color: '#00C9FF'}} />
            <Text style={{marginTop: 12, fontSize: 15, color: '#FA5882'}}>tienkim9920@gmail.com</Text>
          </View>
          <View style={styles.contactRow1}>
            <Icon2 name="logo-chrome" style={{fontSize: 36, color: '#00C9FF'}} />
            <Text style={{marginTop: 12, fontSize: 15, color: '#FA5882'}}>tienkim9920.github.io</Text>
          </View>
        </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  map: {
    height: '42%',
    width: '100%',
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
  contact: {
    height: height / 3.1,
    backgroundColor: 'red',
    marginVertical: 12,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#D8D8D8',
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0},
  }, 
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 2,
  },
  contactRow1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingVertical: 7,
  }
})