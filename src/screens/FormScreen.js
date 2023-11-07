import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function FormScreen() {

return (
    <View style={styles.container}> 
        <Text style={styles.headerText}>Form Screen View</Text>
    </View>
)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerText: {
        fontSize: 25,
        marginBottom: 20,
      },
});