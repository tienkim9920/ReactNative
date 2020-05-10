import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoList({ item, pressHandler }){

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.container}>
                <Text style={styles.content}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 17,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        marginTop: 15,
    },
    content: {
        fontSize: 15,
    }
});