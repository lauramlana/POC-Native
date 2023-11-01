import React from "react";
import { Text, StyleSheet, View, Image  } from "react-native";

export default function DetailScreen() {

    return (
    <View>
      <Image source={{ uri: anime.photo }} style={styles.image} />
      <Text style={styles.propsStyle}>{anime.name}</Text>
      <Text style={styles.info}>{`Streaming: ${anime.streaming}`}</Text>
      <Text style={styles.info}>{`Episodes: ${anime.episodes}`}</Text>
      <Text style={styles.info}>{`Type: ${anime.type}`}</Text>
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
    height: 200,
    marginHorizontal: 20,
    marginTop: 10,
  },
});