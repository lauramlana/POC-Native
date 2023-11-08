import React from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";

export default function MovieDetailScreen({ route }) {
  const { title, overview, poster_path, release_date, vote_average } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MOVIE DETAIL</Text>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.text}>Title: {title}</Text>
      <Text style={styles.text}>Overview: {overview}</Text>
      <Text style={styles.text}>Release Date: {release_date}</Text>
      <Text style={styles.text}>Vote Average: {vote_average}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%", 
    backgroundColor: "#fff", 
    padding: 16,
    marginBottom: 15
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
});
