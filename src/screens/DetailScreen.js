import React from "react";
import { Text, StyleSheet, View, Image  } from "react-native";
import animes from '../assests/mock';

export default function DetailScreen(props) {
  // console.log(props.navigation.getParam('id'));
   const selectedAnime = props.navigation.getParam('id')

    const anime = animes.find((element) => element.id === selectedAnime)
    return (
    <View>
      <Image style={styles.image} source={{ uri: anime.photo }} />
      <Text style={styles.propsStyle}>{anime.name}</Text>
      <Text style={styles.propsStyle}>{anime.streaming}</Text>
      <Text style={styles.propsStyle}>{anime.episodes}</Text>
      <Text style={styles.propsStyle}>{anime.type}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  propsStyle: {
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 40,
  },
  info: {
    fontSize: 15,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  image: {
    width: 'auto',
    height: 500,
    marginHorizontal: 20,
    marginTop: 10,
  },
});