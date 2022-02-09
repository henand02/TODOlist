import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import React, {useState} from 'react';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        width: 400,
        marginTop: 16,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'yellow',
        textAlign: 'center',
    }
});

export default Task;