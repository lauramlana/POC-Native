import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function FormScreen() {

return (
    <View> 
        <Text style={styles.text}>Form Screen View</Text>
    </View>
)
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginVertical: 5,
        marginHorizontal: 40
    },
});