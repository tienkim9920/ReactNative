import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../../../assets/avatar.jpg';

const { height } = Dimensions.get('window');
export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isResult: true,
      name: 'Nguyễn Kim Tiền',
    }
  }

  gotoAuthentication = () => {
    this.props.navigation.push('Authentication');
  }

  gotoChangeInfo = () => {
    this.props.navigation.push('ChangeInfo');
  }

  gotoOrderHistory = () => {
    this.props.navigation.push('OrderHistory');
  }

  render(){
    const { name } = this.state;
    const isCheckJSX = (
      <View>
        <View style={styles.header}>
          <Icon name='ios-contact' color='white' size={230}/>
          <Text style={styles.text}></Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.gotoChangeInfo} style={styles.btnClick} activeOpacity={0.7}>
            <Text style={styles.txtClick}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    const isCheckCompleteJSX = (
      <View>
        <View style={styles.header}>
          <Image source={Avatar} style={styles.icon}/>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={{marginTop: 22,}}>
          <TouchableOpacity onPress={this.gotoChangeInfo} style={styles.btnClick} activeOpacity={0.7}>
            <Text style={styles.txtClick}>ChangeInfo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoOrderHistory} style={styles.btnClick} activeOpacity={0.7}>
            <Text style={styles.txtClick}>OrderHistory</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoAuthentication} style={styles.btnClick} activeOpacity={0.7}>
            <Text style={styles.txtClick}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    
    const mainJSX = this.state.isResult ? isCheckCompleteJSX : isCheckJSX; 
    return(
        <View style={styles.container}>
          {mainJSX}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C9FF',
    paddingTop: 40,
  },
  text: {
    marginTop: 10,
    fontSize: 22,
    color: '#fff',
    fontWeight: "200",
  },
  icon: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginHorizontal: 8,
      marginVertical: 8,
      paddingVertical: 10,
  },
  header: {
    height: height * 0.4,
    alignItems: "center",
  },
  btnClick: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  }, 
  txtClick: {
    fontSize: 19,
    color: '#616060',
    textAlign: "center",
  }
})