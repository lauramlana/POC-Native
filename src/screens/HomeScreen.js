import React from 'react';
import { Text, View,  StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

 const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>Home View</Text>
            <Button 
            onPress={() => props.navigation.navigate('Form')}
            title='Go to Form View'
            />
            <TouchableOpacity
            onPress={() => props.navigation.navigate('List')}
            >
                <Text style={styles.btnTouchable}>GO TO LIST VIEW</Text>
            </TouchableOpacity>
            <Button
            title='Logout'
            onPress={() => FIREBASE_AUTH.signOut()}
            />
        </View>  
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        marginVertical: 20,
        marginHorizontal: 100
      },
      btnTouchable: {
        fontSize: 15,
        marginVertical: 10,
        marginHorizontal: 120,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'gray',
      } 
})

export default HomeScreen;