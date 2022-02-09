import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Ullared köplista</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'blue',
    },
    title: {
        textAlign: 'center',
        color: 'yellow',
        fontSize: 30,
        fontWeight: 'bold',
    }
});