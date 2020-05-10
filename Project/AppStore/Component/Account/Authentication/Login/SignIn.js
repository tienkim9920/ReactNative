import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons.js';

export default class SignIn extends React.Component{

    constructor(props) {
        super(props);
        this.state = { isComplete: true }
    }

    gotoMenu = () => {
        this.props.navigation.navigate('Menu');
    }

    signIn = () => {
        this.setState({isComplete: true});
    }

    signUp = () => {
        this.setState({isComplete: false});
    }

    render() {
        const signInJSX = (
                    <View style={styles.body}>
                        <TextInput placeholder="UserName"
                        style={styles.input} />
                        <TextInput placeholder="PassWord"
                        style={styles.input} />
                        <TouchableOpacity>
                            <Text style={styles.btnSignIn}>
                                Sign In Now
                            </Text>
                        </TouchableOpacity>
                    </View>
        );

        const signUpJSX = (
                    <View style={styles.bodySignUp}>
                        <TextInput placeholder="UserName"
                        style={styles.input} />
                        <TextInput placeholder="PassWord"
                        style={styles.input} />
                        <TextInput placeholder="Email"
                        style={styles.input} />
                        <TextInput placeholder="Phone Number"
                        style={styles.input} />
                        <TouchableOpacity>
                            <Text style={styles.btnSignIn}>
                                Sign Up Now
                            </Text>
                        </TouchableOpacity>
                    </View>
        );
        
        const { isComplete } = this.state;
        const mainJSX = isComplete ? signInJSX : signUpJSX;

        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={this.gotoMenu}>
                            <Icon name='ios-arrow-back' size={50} color='white' style={{marginLeft: 8,}} />
                        </TouchableOpacity>
                        <Text style={styles.textHeader}>Log In</Text>
                    </View>
                    {mainJSX}
                    <View style={styles.footer}>
                        <TouchableOpacity style={isComplete ? styles.txtSignIn : styles.txtSignUp} onPress={this.signIn}>
                        {/* <TouchableOpacity style={styles.txtSignIn} onPress={this.signIn}> */}
                            <Text style={isComplete ? styles.Active : styles.inActive}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={!isComplete ? styles.txtSignIn : styles.txtSignUp} onPress={this.signUp}>
                        {/* <TouchableOpacity style={styles.txtSignUp} onPress={this.signUp}> */}
                            <Text style={!isComplete ? styles.Active : styles.inActive}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    };
}


const styles = StyleSheet.create({
    Active: {
        fontSize: 16,
        textTransform: "uppercase",
        color: '#00C9FF',
        fontWeight: "bold",
    },

    inActive: {
        fontSize: 16,
        textTransform: "uppercase",
        color: '#fff',
    },
    container: {
        backgroundColor: '#00C9FF',
        flex: 1,
    },
    text: {
        marginTop: 40,
    },
    header: {
        flexDirection: "row",
        marginTop: 20,
        marginHorizontal: 5,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    textHeader: {
        fontSize: 32,
        fontWeight: '400',
        color: 'white',
        textTransform: "uppercase",
        textAlign: "center",
        flex: 1,
        marginTop: 5,
        marginRight: 13,
    },
    body: {
        marginTop: 100,
        paddingBottom: 70,
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 16,
        borderRadius: 50,
    },
    btnSignIn: {
        fontSize: 16,
        textAlign: "center",
        borderWidth: 1,
        paddingVertical: 17,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 29,
        textTransform: "uppercase",
        borderColor: 'white',
        color: 'white',
    },
    footer: {
        flexDirection: "row",
        marginTop: 50,
        marginLeft: 25,
    },
    txtSignIn: {
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 47,
        textAlign: "center",
        marginLeft: 5,
        fontSize: 16,
        textTransform: "uppercase",
        borderColor: '#fff',
        borderRadius: 50,
        // borderBottomLeftRadius: 30,
        // borderTopLeftRadius: 30,
        backgroundColor: '#fff',
    },
    txtSignUp: {
        paddingVertical: 15,
        paddingHorizontal: 47,
        marginLeft: 5,
        borderWidth: 1,
        fontSize: 16,
        textTransform: "uppercase",
        borderColor: '#fff',
        borderRadius: 50,
        backgroundColor: '#00C9FF',
    },
    bodySignUp: {
        paddingTop: 20,
        paddingBottom: 11,
    }
});