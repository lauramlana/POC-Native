import React from "react";
import { Text, StyleSheet, View, FlatList, Image, Button } from "react-native";
import animes from '../assests/mock';

export default function ListScreen(props) {

return (
    <View style={{flex: 1}} > 
        <Text style={styles.headerStyle}>
            ListScreen View
        </Text>
        <FlatList 
        keyExtractor={animes => animes.id}
        data={animes}
        renderItem={({item}) => {
            return (
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Image style={styles.image} source={{uri: item.photo}} />
                    <Text style={styles.info}>{item.type}</Text>
                    <Button 
                        title='detalhes'
                        onPress={() => props.navigation.navigate('Detail', {id: item.id, animes: item})}
                    ></Button>
                </View>
            )
        }}
        />       
    </View>
)
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        marginBottom: 5,
        marginHorizontal: 80
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20
    },
    info: {
        fontSize: 15,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    image: {
      width: 'auto', 
      height: 100,
      marginHorizontal: 20,
      marginTop: 10,
    }
});