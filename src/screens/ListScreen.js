import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Image, Button } from "react-native";
import animes from "../assets/mock";

export default function ListScreen(props) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterAnimes = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ListScreen View</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="All"
          onPress={() => filterAnimes("all")}
          color={selectedCategory === "all" ? "blue" : "gray"}
          style={styles.button}
        />
        <Button
          title="Sport"
          onPress={() => filterAnimes("Sport")}
          color={selectedCategory === "Sport" ? "blue" : "gray"}
          style={styles.button}
        />
        <Button
          title="Seinen"
          onPress={() => filterAnimes("Seinen")}
          color={selectedCategory === "Seinen" ? "blue" : "gray"}
          style={styles.button}
        />
        <Button
          title="Shounen"
          onPress={() => filterAnimes("Shounen")}
          color={selectedCategory === "Shounen" ? "blue" : "gray"}
          style={styles.button}
        />
        <Button
          title="Shoujo"
          onPress={() => filterAnimes("Shoujo")}
          color={selectedCategory === "Shoujo" ? "blue" : "gray"}
          style={styles.button}
        />
        <Button
          title="Suspense"
          onPress={() => filterAnimes("Suspense")}
          color={selectedCategory === "Suspense" ? "blue" : "gray"}
          style={styles.button}
        />
      </View>

      <FlatList
        style={styles.flatList}
        keyExtractor={(anime) => anime.id}
        data={animes.filter((item) => selectedCategory === "all" || item.type === selectedCategory)}
        renderItem={({ item }) => (
          <View style={styles.animeItem}>
            <Text style={styles.title}>{item.name}</Text>
            <Image style={styles.image} source={{ uri: item.photo }} />
            <Text style={styles.info}>{item.type}</Text>
            <Button
              title="Detalhes"
              onPress={() =>
                props.navigation.navigate("Detail", {
                  id: item.id,
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    textTransform: "uppercase",
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
  },
  flatList: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  animeItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  image: {
    width: "auto",
    height: 100,
    marginHorizontal: 20,
    marginTop: 10,
  },
  info: {
    fontSize: 15,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
