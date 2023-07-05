import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetails } from './actions';

const DetailsScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailName, setEmailName] = useState('');
    const users = useSelector((state) => state.users);
    const {name, last, id, email} = route.params;


    const handleUpdate = () => {
        const mapData = users.map((el) => {
            if(el.id === id){
                el.first_name = firstName;
                el.last_name = lastName;
                el.email = emailName;
            }
            return el;
        });
        dispatch(updateUserDetails(mapData));
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={name}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder={last}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder={email}
                onChangeText={setEmailName}
            />
            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default DetailsScreen;

