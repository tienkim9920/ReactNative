import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons.js';

export default class ChangeInfor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     name: '', 
    }
  }

  yourChange = () => {
    this.setState({
      name: this.state.name
    })
    this.props.navigation.goBack();
  }

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
              <Text style={styles.textHeader}>User Information</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View style={styles.body}>
                <View style={styles.groupContent}>
                  <TextInput style={styles.txtInput} placeholder="Enter your name" onChangeText={(name) => this.setState({name})} />
                  <TextInput style={styles.txtInput} placeholder="Enter your address"/>
                  <TextInput style={styles.txtInput} placeholder="Enter your phone number"/>
                  <TouchableOpacity style={styles.btnInput} onPress={this.yourChange}>
                    <Text style={{fontSize: 15, textTransform: "uppercase", color: '#fff', letterSpacing: .5, textAlign: "center"}}>Change your Information</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
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
    marginTop: 18,
    marginRight: 13,
  },
  body: {
    justifyContent: "center",
    flex: .95,
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#00C9FF',
    paddingHorizontal: 17,
    paddingVertical: 15,
    marginHorizontal: 25,
    fontSize: 16,
    letterSpacing: 1,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  btnInput: {
    paddingHorizontal: 17,
    paddingVertical: 15,
    marginHorizontal: 25,
    fontSize: 16,
    letterSpacing: 1,
    borderRadius: 50,
    backgroundColor: '#00C9FF',
    marginVertical: 8,
  }
})