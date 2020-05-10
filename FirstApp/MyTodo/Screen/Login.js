import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, Alert, TouchableOpacity, TextInput,  TouchableWithoutFeedback, Keyboard } from 'react-native';


const userInfo = { userName: 'Kimtien', passWord: '123'};
export default class Login extends React.Component{

  async componentDidMount(){
    await Font.loadAsync({
      'Dancing': require('../assets/DancingScript-VariableFont_wght.ttf'),
    })
  }

  constructor(props){
    super(props);
    this.state = {
      userName: '',
      passWord: '',
    }
  }

  pressHandler = async() => {
    if ( userInfo.userName === this.state.userName && userInfo.passWord === this.state.passWord){
      this.props.navigation.navigate('Home')
    } else{
      Alert.alert('Sai Thông Tin Đăng Nhập')
    }
  }

  render(){
    return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.FormGroup}>
          <Text style={styles.title}>Login My App</Text>

          <TextInput 
          placeholder='UserName'
          style={styles.input}
          onChangeText={(userName) => this.setState({userName})} />

          <TextInput 
          placeholder='PassWord'
          style={styles.input}
          onChangeText={(passWord) => this.setState({passWord})}
          secureTextEntry={true}
          keyboardType='numeric' />

          <View style={styles.ComboBox}>
            <TouchableOpacity
             style={styles.Box}
             onPress={this.pressHandler} >
              <Text style={styles.boxTxt}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Box}>
              <Text style={styles.boxTxt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  FormGroup: {
    alignContent: "center",
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    backgroundColor: '#287EFF',
  },
  title: {
    fontFamily: 'Dancing',
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: 'white',
    marginBottom: 20,
  },
  input: {
    marginHorizontal: 30,
    paddingVertical: 14,
    paddingHorizontal: 13,
    backgroundColor: '#fff',
    marginTop: 10,
    fontSize: 14.5,
  },
  ComboBox: {
    flexDirection: "row",
    alignSelf: "center",
  },
  Box: {
    marginTop: 10,
    backgroundColor: '#EDCA31',
    paddingHorizontal: 40,
    paddingVertical: 13,
    marginHorizontal: 22,
  },
  boxTxt: {
    fontSize: 17,
    fontWeight: "400",
  }
});