import React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import animes from "../assets/mock";

export default function DetailScreen({ route }) {
  const { id } = route.params;
  const selectedAnime = id;

  const anime = animes.find((element) => element.id === selectedAnime);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{anime.name}</Text>
      <Image style={styles.image} source={{ uri: anime.photo }} />
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Streaming: {anime.streaming}</Text>
        <Text style={styles.info}>Episodes: {anime.episodes}</Text>
        <Text style={styles.info}>Type: {anime.type}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  infoContainer: {
    marginHorizontal: 20,
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
  },
});
