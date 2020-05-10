import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.content}>App Kim Tiền</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'coral',
        padding: 22,
        borderRadius: 5,
        shadowRadius: 3,
        shadowOpacity: 3,
        shadowOffset: {width: 0, height: 0},
    },
    content: {
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: 28,
        letterSpacing: 3,
        color: '#fff',
    }
});