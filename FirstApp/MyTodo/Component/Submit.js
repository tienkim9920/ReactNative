import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Submit({ submitHandler }){

    const [Todo, setTodo] = useState('');

    const onChangeText = (value) => {
        setTodo(value)
    };

    return (
        <View>
            <Text style={styles.text}>Nhập Ghi Chú:</Text>
            <TextInput
                placeholder="Enter Here!"
                onChangeText={onChangeText}
                style={styles.input} />
            <TouchableOpacity
                onPress = {() => submitHandler(Todo)}
                style={styles.button}>
                <Text style={styles.text1}>Add Items</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>Danh Sách Ghi Chú:</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        fontSize: 17,
    },
    text: {
        fontSize: 17,
        paddingBottom: 10,
        paddingHorizontal: 5,
    },
    text1: {
        textAlign: "center",
        fontSize: 17,
        color: '#fff'
    },
    text2: {
        marginTop: 10,
        paddingHorizontal: 10,
        fontSize: 17,
    },
    button: {
        backgroundColor: 'coral',
        padding: 15,
        marginTop: 18,
        borderRadius: 10,
    },
})